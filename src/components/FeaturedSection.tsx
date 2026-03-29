import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Lightbulb, Target, Layers, Sparkles } from "lucide-react";

const caseStudy = {
  title: "GDG on Campus — Event Branding",
  problem: "GDG on Campus IIIT Kalyani needed a cohesive visual identity for their events that would attract student participation and reflect the Google Developer brand while maintaining campus personality.",
  idea: "Create a design system that blends Google's vibrant colors with a modern, tech-forward aesthetic. Each event poster would feel unique yet unmistakably part of the GDG family.",
  approach: "Started with mood boards and color explorations in Figma. Developed reusable templates and a consistent typography hierarchy. Iterated based on team feedback and event requirements.",
  outcome: "Delivered a complete set of event posters, social media assets, and promotional materials that significantly boosted event engagement and established a recognizable brand presence on campus.",
};

const items = [
  { icon: Target, label: "Problem", text: caseStudy.problem, accent: "340 72% 48%" },
  { icon: Lightbulb, label: "Idea", text: caseStudy.idea, accent: "280 60% 50%" },
  { icon: Layers, label: "Approach", text: caseStudy.approach, accent: "200 70% 50%" },
  { icon: Sparkles, label: "Outcome", text: caseStudy.outcome, accent: "160 60% 45%" },
];

const FeaturedSection = () => (
  <SectionWrapper id="featured" className="section-gradient">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4 font-body">Deep Dive</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Featured <span className="gradient-text">Case Study</span>
        </h2>
      </div>

      <div className="glass-card gradient-border p-8 md:p-14 max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10"
        >
          {caseStudy.title}
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-3 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/80 flex items-center justify-center group-hover:shadow-[0_0_24px_hsl(var(--glow-soft)/0.15)] transition-all duration-500">
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
          transition={{ delay: 0.5 }}
          className="mt-10 pt-8 border-t border-border/30"
        >
          <a href="#" className="text-sm text-accent hover:text-foreground transition-colors font-body inline-flex items-center gap-2 group">
            View in Figma
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

export default FeaturedSection;
