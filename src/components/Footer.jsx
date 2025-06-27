const Footer = () => {
  return (
    <footer
      className="bg-black border-t border-neutral-800 text-white text-sm py-10 px-6"
      aria-label="Footer"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left - Name & tagline */}
        <div className="text-center sm:text-left">
          <p className="font-semibold">Amyg Systems</p>
          <p className="text-gray-400">Precision. Performance. Reliability.</p>
        </div>

        {/* Middle - Contact */}
        <div className="text-gray-400 text-center sm:text-left">
          <p>
            Contact:{" "}
            <a
              href="mailto:j.amyralis@gmail.com"
              className="underline hover:text-blue-400"
            >
              j.amyralis@gmail.com
            </a>
          </p>
        </div>

        {/* Right - Logo and credits */}
        <div className="flex flex-col items-center sm:items-end text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Amyg Systems. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-gray-400">Website by:</span>
            <img
              src="/Dagnilogo.png"
              alt="DaGni Design Logo"
              className="h-[3.75rem]"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;