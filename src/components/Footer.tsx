import { Wifi, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Wifi className="w-6 h-6" />
            <span className="text-lg font-bold">NetRumah</span>
          </div>
          <p className="text-sm opacity-70">Internet cepat dan stabil untuk rumah Anda. Layanan RT-RW Net terpercaya.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Kontak</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0812-3456-7890</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Jonggol, Bogor, Jawa Barat</li>
            <li className="flex items-center gap-2"><Instagram className="w-4 h-4" /> @netrumah</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#paket" className="hover:opacity-100 transition-opacity">Paket Internet</a></li>
            <li><a href="#daftar" className="hover:opacity-100 transition-opacity">Daftar</a></li>
            <li><a href="/admin" className="hover:opacity-100 transition-opacity">Admin</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} NetRumah. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
