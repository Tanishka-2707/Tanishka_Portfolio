import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Figma, Paintbrush, Film } from "lucide-react";

const tools = [
  { name: "Figma", desc: "UI/UX Design & Prototyping", icon: Figma, color: "340 72% 48%" },
  { name: "Canva", desc: "Graphic Design & Social Media", icon: Paintbrush, color: "280 60% 50%" },
  { name: "Wondershare Filmora", desc: "Video Editing & Motion Graphics", icon: Film, color: "200 70% 50%" },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" className="section-gradient">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4 font-body">Tools & Skills</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          My <span className="gradient-text">toolkit</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="glass-card gradient-border p-8 md:p-10 text-center group cursor-default"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/80 flex items-center justify-center group-hover:shadow-[0_0_32px_hsl(var(--glow-soft)/0.2)] transition-all duration-500">
              <tool.icon size={28} className="text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{tool.name}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{tool.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
