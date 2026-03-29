import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Linkedin, Github, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = ["Graphic Designer", "UI Design Learner", "Visual Storyteller"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/6 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6 font-body"
            >
              Creative Portfolio
            </motion.p>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[0.95] tracking-tight">
              <span className="text-foreground">Tanishka</span>
              <br />
              <span className="gradient-text glow-text">Jain</span>
            </h1>

            <div className="h-9 mb-8 flex items-center">
              <span className="font-body text-lg md:text-xl text-accent/90 font-light tracking-wide">
                {text}
              </span>
              <span className="border-r-2 border-accent ml-0.5 animate-typing-cursor h-5">&nbsp;</span>
            </div>

            <p className="text-muted-foreground font-body leading-[1.8] max-w-md mb-10 text-[15px]">
              Turning ideas into visuals that speak for themselves.
              <br />
              Designing with clarity, purpose, and aesthetic balance.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Mail, href: "#contact", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card-subtle gradient-border p-3.5 text-muted-foreground hover:text-accent transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass-card glow-border flex items-center justify-center animate-float">
                <span className="text-6xl md:text-7xl font-heading font-bold gradient-text select-none">TJ</span>
              </div>
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/15 via-transparent to-accent/15 blur-3xl -z-10 animate-pulse" />
              <div className="absolute -inset-1 rounded-full gradient-border" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 group cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50 font-body group-hover:text-muted-foreground transition-colors">Scroll</span>
          <ArrowDown size={14} className="text-muted-foreground/30 group-hover:text-accent transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
