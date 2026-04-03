import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const CoverageSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Area Cakupan</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Kami melayani area Jonggol, Cariu, Sukamakmur dan sekitarnya.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-card rounded-2xl p-8 text-center"
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-10 h-10 text-primary" />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {["Jonggol", "Cariu", "Sukamakmur", "Cileungsi", "Gunung Putri"].map((area) => (
            <span key={area} className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">{area}</span>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-6">Hubungi kami untuk mengecek ketersediaan di lokasi Anda.</p>
      </motion.div>
    </div>
  </section>
);

export default CoverageSection;
