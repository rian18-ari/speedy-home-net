import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const SCALEV_URL = "https://scalev.id"; // Replace with actual Scalev payment URL

interface Registration {
  nama: string;
  whatsapp: string;
  alamat: string;
  paket: string;
}

const RegistrationForm = () => {
  const [form, setForm] = useState<Registration>({ nama: "", whatsapp: "", alamat: "", paket: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nama || !form.whatsapp || !form.alamat || !form.paket) {
      toast.error("Mohon lengkapi semua data.");
      return;
    }

    setLoading(true);
    // Save to localStorage for admin dashboard
    const registrations: Registration[] = JSON.parse(localStorage.getItem("registrations") || "[]");
    registrations.push({ ...form });
    localStorage.setItem("registrations", JSON.stringify(registrations));

    toast.success("Pendaftaran berhasil! Mengarahkan ke pembayaran...");

    setTimeout(() => {
      setLoading(false);
      window.open(`${SCALEV_URL}?paket=${form.paket}`, "_blank");
      setForm({ nama: "", whatsapp: "", alamat: "", paket: "" });
    }, 1500);
  };

  return (
    <section id="daftar" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Daftar Sekarang</h2>
          <p className="text-muted-foreground">Isi formulir di bawah ini untuk memulai berlangganan.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-card rounded-2xl p-8 space-y-5"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <div>
            <Label htmlFor="nama" className="text-foreground font-medium">Nama Lengkap</Label>
            <Input id="nama" placeholder="Masukkan nama lengkap" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="wa" className="text-foreground font-medium">Nomor WhatsApp</Label>
            <Input id="wa" placeholder="08xxxxxxxxxx" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="alamat" className="text-foreground font-medium">Alamat</Label>
            <Input id="alamat" placeholder="Alamat lengkap" value={form.alamat} onChange={(e) => setForm({ ...form, alamat: e.target.value })} className="mt-1.5" />
          </div>
          <div>
            <Label className="text-foreground font-medium">Pilih Paket</Label>
            <Select value={form.paket} onValueChange={(v) => setForm({ ...form, paket: v })}>
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Pilih paket internet" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Paket Basic - 10 Mbps - Rp100.000</SelectItem>
                <SelectItem value="family">Paket Family - 20 Mbps - Rp150.000</SelectItem>
                <SelectItem value="pro">Paket Pro - 50 Mbps - Rp250.000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full py-5 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90" disabled={loading}>
            {loading ? "Memproses..." : "Daftar & Bayar via Scalev"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default RegistrationForm;
