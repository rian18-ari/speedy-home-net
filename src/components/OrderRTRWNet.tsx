import { motion } from "framer-motion";
import { Wifi, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const OrderRTRWNet = () => {
  return (
    <section id="pesan-rtrwnet" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center bg-card rounded-2xl p-10 md:p-14"
          style={{ boxShadow: "var(--card-shadow-hover)" }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Wifi className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Pesan RT-RW Net
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Ingin memasang jaringan RT-RW Net di lingkungan Anda? Hubungi kami untuk konsultasi dan pemesanan langsung.
          </p>
          <Link
            href="https://bintang-jaya.myscalev.com/p/rt-rw-net"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 py-6 text-base rounded-xl shadow-lg gap-2"
            
          > 
            Pesan Sekarang
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderRTRWNet;
