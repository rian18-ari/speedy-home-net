import { motion } from "framer-motion";
import { Clock, DollarSign, Headphones, Infinity } from "lucide-react";

const features = [
  { icon: Clock, title: "Internet Stabil 24 Jam", desc: "Koneksi nonstop tanpa gangguan, siang maupun malam." },
  { icon: DollarSign, title: "Harga Terjangkau", desc: "Paket internet mulai dari Rp100.000 per bulan." },
  { icon: Headphones, title: "Support Cepat", desc: "Tim support siap membantu kapan saja via WhatsApp." },
  { icon: Infinity, title: "Tanpa FUP", desc: "Unlimited tanpa batas kuota, bebas browsing sepuasnya." },
];

const FeaturesSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Keunggulan Layanan Kami</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Kenapa harus memilih kami? Karena kami mengutamakan kualitas dan kepuasan pelanggan.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-7 text-center"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
