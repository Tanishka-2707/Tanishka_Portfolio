import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Figma, Paintbrush, Film } from "lucide-react";

const tools = [
  {
    name: "Figma",
    desc: "UI/UX Design & Prototyping",
    icon: Figma,
  },
  {
    name: "Canva",
    desc: "Graphic Design & Social Media",
    icon: Paintbrush,
  },
  {
    name: "Wondershare Filmora",
    desc: "Video Editing & Motion Graphics",
    icon: Film,
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" className="section-gradient">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Tools & Skills</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          My <span className="gradient-text">toolkit</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-card-hover p-8 text-center group cursor-default"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <tool.icon size={26} className="text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{tool.name}</h3>
            <p className="text-sm text-muted-foreground font-body">{tool.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
