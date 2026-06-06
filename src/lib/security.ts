/**
 * Shared security helpers for public form-handling API routes.
 *
 * Covers: HTML escaping (prevents injection into the email body the owner
 * receives), header sanitization (strips CR/LF so values can't manipulate
 * the email subject / reply-to), email-format validation, and a best-effort
 * in-memory rate limiter to blunt spam/abuse and protect the Resend quota.
 */

/** Escape HTML-significant characters before interpolating user input into email HTML. */
export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Strip control characters (incl. CR/LF) and collapse whitespace so a value
 * can't inject extra email headers (subject, reply-to). Filters by char code
 * to avoid embedding control-character literals in source.
 */
export function sanitizeHeader(value: unknown): string {
  let out = '';
  for (const ch of String(value ?? '')) {
    const code = ch.charCodeAt(0);
    if (code > 31 && code !== 127) out += ch;
  }
  return out.replace(/\s+/g, ' ').trim();
}

/** RFC-5322-lite email validation: good enough to reject malformed / multi-address input. */
export function isValidEmail(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  const email = value.trim();
  if (email.length > 254) return false;
  return /^[^\s@,;:<>"]+@[^\s@,;:<>"]+\.[^\s@,;:<>"]{2,}$/.test(email);
}

/** Trim and hard-cap a string field. Returns the cleaned value (never throws). */
export function clamp(value: unknown, max: number): string {
  return String(value ?? '').trim().slice(0, max);
}

/** Pull the best-guess client IP from proxy headers (Vercel sets x-forwarded-for). */
export function getClientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

/**
 * Best-effort in-memory sliding-window rate limit, keyed by IP + route.
 *
 * Note: serverless instances each hold their own memory, so this catches
 * bursts against a warm instance rather than a distributed flood. For
 * production-grade limiting, back this with Upstash/Vercel KV. It is a
 * meaningful zero-dependency layer in the meantime.
 *
 * @returns true if the request is allowed, false if it should be rejected (429).
 */
export function rateLimit(key: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now >= bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= limit) return false;

  bucket.count += 1;
  return true;
}
