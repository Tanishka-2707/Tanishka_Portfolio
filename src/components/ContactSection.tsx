import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Linkedin, Globe } from "lucide-react";

const ContactSection = () => (
  <SectionWrapper id="contact" className="section-gradient">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Get in Touch</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Let's <span className="gradient-text">Connect</span>
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12 max-w-lg mx-auto text-center"
      >
        <p className="text-muted-foreground font-body mb-8 leading-relaxed">
          Have a project in mind, want to collaborate, or just want to say hello?
          I'd love to hear from you.
        </p>

        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
            { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "#" },
            { icon: Globe, label: "Portfolio", value: "More links coming soon", href: "#" },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.02, x: 4 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon size={18} className="text-accent" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground font-body">{item.label}</p>
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
