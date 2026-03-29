import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";
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
      timeout = setTimeout(() => setDeleting(true), 2000);
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
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body"
            >
              Portfolio
            </motion.p>

            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">
              <span className="text-foreground">Tanishka</span>
              <br />
              <span className="gradient-text">Jain</span>
            </h1>

            <div className="h-8 mb-6">
              <span className="font-body text-lg text-accent">
                {text}
              </span>
              <span className="border-r-2 ml-0.5 animate-typing-cursor">&nbsp;</span>
            </div>

            <p className="text-muted-foreground font-body leading-relaxed max-w-lg mb-8">
              Turning ideas into visuals that speak for themselves.
              <br />
              Designing with clarity, purpose, and aesthetic balance.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Mail, href: "#contact", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-3 text-muted-foreground hover:text-accent transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass-card glow-border flex items-center justify-center animate-float">
                <span className="text-6xl md:text-7xl font-heading font-bold gradient-text">TJ</span>
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
