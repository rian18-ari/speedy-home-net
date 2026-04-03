import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  { name: "Basic", speed: "10 Mbps", price: "100.000", features: ["Unlimited Data", "Support WhatsApp", "Instalasi Gratis"], popular: false },
  { name: "Family", speed: "20 Mbps", price: "150.000", features: ["Unlimited Data", "Support WhatsApp", "Instalasi Gratis", "Router Gratis"], popular: true },
  { name: "Pro", speed: "50 Mbps", price: "250.000", features: ["Unlimited Data", "Support Prioritas", "Instalasi Gratis", "Router Gratis", "IP Statis"], popular: false },
];

const PricingSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="paket" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Pilih Paket Internet</h2>
          <p className="text-muted-foreground">Tersedia berbagai paket sesuai kebutuhan Anda.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative bg-card rounded-2xl p-8 flex flex-col ${plan.popular ? "ring-2 ring-primary scale-105" : ""}`}
              style={{ boxShadow: plan.popular ? "var(--card-shadow-hover)" : "var(--card-shadow)" }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Terpopuler
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground mb-1">Paket {plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.speed}</p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-foreground">Rp{plan.price}</span>
                <span className="text-muted-foreground text-sm"> / bulan</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full py-5 rounded-xl font-semibold ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                onClick={() => scrollTo("daftar")}
              >
                Berlangganan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
