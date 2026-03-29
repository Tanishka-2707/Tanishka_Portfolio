import { motion } from "framer-motion";
import SectionWrapper, { childVariants } from "./SectionWrapper";
import { Lightbulb, Target, Layers, Sparkles } from "lucide-react";

const caseStudy = {
  title: "GDG on Campus — Event Branding",
  problem: "GDG on Campus IIIT Kalyani needed a cohesive visual identity for their events that would attract student participation and reflect the Google Developer brand while maintaining campus personality.",
  idea: "Create a design system that blends Google's vibrant colors with a modern, tech-forward aesthetic. Each event poster would feel unique yet unmistakably part of the GDG family.",
  approach: "Started with mood boards and color explorations in Figma. Developed reusable templates and a consistent typography hierarchy. Iterated based on team feedback and event requirements.",
  outcome: "Delivered a complete set of event posters, social media assets, and promotional materials that significantly boosted event engagement and established a recognizable brand presence on campus.",
};

const items = [
  { icon: Target, label: "Problem", text: caseStudy.problem },
  { icon: Lightbulb, label: "Idea", text: caseStudy.idea },
  { icon: Layers, label: "Approach", text: caseStudy.approach },
  { icon: Sparkles, label: "Outcome", text: caseStudy.outcome },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.15 + i * 0.12, duration: 0.6, ease: 'easeInOut' as const },
  }),
};

const FeaturedSection = () => (
  <SectionWrapper id="featured" className="section-gradient">
    <div className="max-w-7xl mx-auto">
      <motion.div variants={childVariants} className="text-center mb-20">
        <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4 font-body">Deep Dive</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Featured <span className="gradient-text">Case Study</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' as const }}
        className="glass-card gradient-border p-8 md:p-14 max-w-5xl mx-auto"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10"
        >
          {caseStudy.title}
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/80 flex items-center justify-center group-hover:shadow-[0_0_24px_hsl(var(--glow-soft)/0.2)] transition-all duration-500">
                  <item.icon size={18} className="text-accent" strokeWidth={1.5} />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-[15px]">{item.label}</h4>
              </div>
              <p className="text-sm text-muted-foreground font-body leading-[1.8] pl-[52px]">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 pt-8 border-t border-border/30"
        >
          <a href="#" className="text-sm text-accent hover:text-foreground transition-colors duration-300 font-body inline-flex items-center gap-2 group">
            View in Figma
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default FeaturedSection;
