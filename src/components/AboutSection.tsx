import { motion } from "framer-motion";
import SectionWrapper, { childVariants } from "./SectionWrapper";

const stats = [
  { label: "Education", value: "B.Tech CSE, IIIT Kalyani" },
  { label: "Focus", value: "Graphic & UI Design" },
  { label: "Passion", value: "Visual Storytelling" },
  { label: "Goal", value: "UI/UX Designer" },
];

const textStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div variants={textStagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 lg:order-1">
          <motion.p variants={childVariants} className="text-xs tracking-[0.35em] uppercase text-accent mb-4 font-body">
            About Me
          </motion.p>
          <motion.h2 variants={childVariants} className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            Crafting visuals with <span className="gradient-text">purpose</span>
          </motion.h2>
          <div className="space-y-5 text-muted-foreground font-body leading-[1.85] text-[15px]">
            <motion.p variants={childVariants}>
              I'm a Computer Science student at IIIT Kalyani with a deep passion for design. While code is my foundation,
              design is where I truly express myself — transforming raw ideas into visually compelling outputs that resonate.
            </motion.p>
            <motion.p variants={childVariants}>
              My design philosophy is rooted in clarity and intentionality. Every visual should serve a purpose,
              every element should earn its place on the canvas. Clean over cluttered, always aligned with requirements,
              crafted with aesthetic balance.
            </motion.p>
            <motion.p variants={childVariants}>
              Currently exploring UI/UX design, bridging the gap between beautiful interfaces
              and meaningful user experiences.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' as const }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="glass-card gradient-border p-8 md:p-10 max-w-sm w-full">
            <div className="space-y-5">
              {stats.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ease: 'easeInOut' as const }}
                  className="border-b border-border/30 pb-4 last:border-0 last:pb-0"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-1.5 font-body">{item.label}</p>
                  <p className="text-foreground font-heading font-medium text-[15px]">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
