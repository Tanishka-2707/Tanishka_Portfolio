import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Linkedin, Globe } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "#" },
  { icon: Globe, label: "Portfolio", value: "More links coming soon", href: "#" },
];

const ContactSection = () => (
  <SectionWrapper id="contact" className="section-gradient">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4 font-body">Get in Touch</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Let's <span className="gradient-text">Connect</span>
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="glass-card gradient-border p-8 md:p-14 max-w-lg mx-auto text-center"
      >
        <p className="text-muted-foreground font-body mb-10 leading-[1.8] text-[15px]">
          Have a project in mind, want to collaborate, or just want to say hello?
          I'd love to hear from you.
        </p>

        <div className="space-y-4">
          {contactLinks.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.02, x: 6 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/40 hover:bg-secondary/60 border border-border/20 hover:border-accent/20 transition-all duration-400 group"
            >
              <div className="w-10 h-10 rounded-xl bg-muted/60 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--glow-soft)/0.15)] transition-all duration-500">
                <item.icon size={17} className="text-accent" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">{item.label}</p>
                <p className="text-sm text-foreground font-body">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default ContactSection;
