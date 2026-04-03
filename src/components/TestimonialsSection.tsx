import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Budi Santoso", area: "Jonggol", text: "Internet stabil banget, cocok buat kerja dari rumah. Sudah 1 tahun langganan dan tidak pernah kecewa!" },
  { name: "Siti Rahmawati", area: "Cariu", text: "Harganya murah tapi kualitasnya juara. Anak-anak bisa belajar online tanpa buffering." },
  { name: "Ahmad Fauzi", area: "Sukamakmur", text: "Support-nya responsif banget, kalau ada masalah langsung ditangani. Recommended!" },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Kata Pelanggan Kami</h2>
        <p className="text-muted-foreground">Bergabung bersama ratusan pelanggan yang puas.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-7"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-foreground text-sm mb-5 leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.area}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
