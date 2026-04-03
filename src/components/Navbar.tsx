import { useState } from "react";
import { Wifi, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 text-primary font-bold text-lg">
          <Wifi className="w-6 h-6" /> NetRumah
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <a href="#paket" className="hover:text-primary transition-colors">Paket</a>
          <a href="#daftar" className="hover:text-primary transition-colors">Daftar</a>
          <a href="/admin" className="hover:text-primary transition-colors">Admin</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 space-y-3 text-sm font-medium">
          <a href="#paket" className="block" onClick={() => setOpen(false)}>Paket</a>
          <a href="#daftar" className="block" onClick={() => setOpen(false)}>Daftar</a>
          <a href="/admin" className="block" onClick={() => setOpen(false)}>Admin</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
