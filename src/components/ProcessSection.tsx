import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Search, Lightbulb, PenTool, CheckCircle } from "lucide-react";

const steps = [
  { icon: Search, label: "Research", desc: "Understanding the brief, audience, and context" },
  { icon: Lightbulb, label: "Ideation", desc: "Exploring concepts, mood boards, and directions" },
  { icon: PenTool, label: "Design", desc: "Crafting visuals with precision and purpose" },
  { icon: CheckCircle, label: "Deliver", desc: "Final output polished and aligned with goals" },
];

const ProcessSection = () => (
  <SectionWrapper id="process">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Workflow</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Design <span className="gradient-text">Process</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card-hover p-6 text-center w-44"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary flex items-center justify-center">
                <step.icon size={22} className="text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-1">{step.label}</h4>
              <p className="text-xs text-muted-foreground font-body">{step.desc}</p>
            </motion.div>
            {i < steps.length - 1 && (
              <div className="hidden md:block w-8 h-px bg-gradient-to-r from-accent/50 to-transparent mx-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ProcessSection;
