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

const FeaturedSection = () => (
  <SectionWrapper id="featured" className="section-gradient">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Deep Dive</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Featured <span className="gradient-text">Case Study</span>
        </h2>
      </div>

      <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-8">{caseStudy.title}</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Target, label: "Problem", text: caseStudy.problem },
            { icon: Lightbulb, label: "Idea", text: caseStudy.idea },
            { icon: Layers, label: "Approach", text: caseStudy.approach },
            { icon: Sparkles, label: "Outcome", text: caseStudy.outcome },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <item.icon size={18} className="text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-foreground">{item.label}</h4>
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex gap-4">
          <a href="#" className="text-sm text-accent hover:text-foreground transition-colors font-body">
            View in Figma →
          </a>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default FeaturedSection;
