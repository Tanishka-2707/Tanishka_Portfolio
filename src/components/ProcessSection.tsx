import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Search, Lightbulb, PenTool, CheckCircle } from "lucide-react";

const steps = [
  { icon: Search, label: "Research", desc: "Understanding the brief, audience, and context", num: "01" },
  { icon: Lightbulb, label: "Ideation", desc: "Exploring concepts, mood boards, and directions", num: "02" },
  { icon: PenTool, label: "Design", desc: "Crafting visuals with precision and purpose", num: "03" },
  { icon: CheckCircle, label: "Deliver", desc: "Final output polished and aligned with goals", num: "04" },
];

const ProcessSection = () => (
  <SectionWrapper id="process">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4 font-body">Workflow</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Design <span className="gradient-text">Process</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-0 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className="glass-card gradient-border p-7 text-center w-full group cursor-default"
            >
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground/40 font-body block mb-3">{step.num}</span>
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary/80 flex items-center justify-center group-hover:shadow-[0_0_24px_hsl(var(--glow-soft)/0.15)] transition-all duration-500">
                <step.icon size={22} className="text-accent" strokeWidth={1.5} />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-2">{step.label}</h4>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{step.desc}</p>
            </motion.div>
            {i < steps.length - 1 && (
              <div className="hidden md:flex items-center px-2">
                <div className="w-10 h-px bg-gradient-to-r from-accent/40 to-accent/10" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ProcessSection;
