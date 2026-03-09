export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0d0f13] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-mono">
          Loading
        </span>
      </div>
    </div>
  );
}
