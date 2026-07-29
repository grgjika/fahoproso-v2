import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
       <Image
        src="/images/logo.png"
        alt="FAHOPROSO"
        width={190}
        height={45}
        priority
       />
       </a>

        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </nav>
    </header>
  );
}