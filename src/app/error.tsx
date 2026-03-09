"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="font-mono text-6xl font-black text-red-500/20 mb-4 select-none">
          ERROR
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight mb-4">
          Something went wrong
        </h2>
        <p className="text-zinc-500 mb-8 max-w-md mx-auto">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
