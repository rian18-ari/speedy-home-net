import { motion } from "framer-motion";
import { Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute bottom-10 -left-16 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-white/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <Wifi className="w-5 h-5 text-white" />
              <span className="text-white/90 text-sm font-medium">RT-RW Net Terpercaya</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Internet Cepat dan Stabil untuk Rumah Anda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto"
          >
            Nikmati koneksi internet fiber cepat dengan harga terjangkau.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-base rounded-xl shadow-lg"
              onClick={() => scrollTo("paket")}
            >
              Lihat Paket
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-xl"
              onClick={() => scrollTo("daftar")}
            >
              Berlangganan Sekarang
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
