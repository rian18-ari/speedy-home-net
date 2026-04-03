import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "Pilih Paket", desc: "Pilih paket internet sesuai kebutuhan Anda." },
  { num: "2", title: "Isi Data", desc: "Lengkapi formulir pendaftaran pelanggan." },
  { num: "3", title: "Bayar via Scalev", desc: "Lakukan pembayaran melalui sistem Scalev." },
  { num: "4", title: "Instalasi", desc: "Tim kami datang dan melakukan pemasangan." },
];

const StepsSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Cara Berlangganan</h2>
        <p className="text-muted-foreground">Hanya 4 langkah mudah untuk menikmati internet cepat.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-extrabold text-primary-foreground bg-primary">
              {s.num}
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
