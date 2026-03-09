import Link from "next/link";
import DarkNav from "@/components/DarkNav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d0f13] text-zinc-300 flex flex-col">
      <DarkNav />

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="font-mono text-8xl lg:text-9xl font-black text-orange-500/20 mb-4 select-none">
            404
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
            Page not found
          </h1>
          <p className="text-zinc-500 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
