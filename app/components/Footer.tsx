export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">

        <div>
          <p className="text-lg font-semibold">
            nexora<span className="text-purple-400">.</span>
          </p>

          <p className="mt-1 text-xs text-white/30">
            Build smarter. Move faster.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white">
            Twitter
          </a>

          <a href="#" className="hover:text-white">
            GitHub
          </a>

          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-white/30">
          © 2026 Nexora
        </p>

      </div>
    </footer>
  );
}