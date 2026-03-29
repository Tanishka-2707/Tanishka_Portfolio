import { motion } from "framer-motion";
import SectionWrapper, { childVariants } from "./SectionWrapper";
import { Award, Users, Mic, Medal } from "lucide-react";

const experiences = [
  {
    role: "Creative Lead",
    org: "GDG on Campus IIIT Kalyani",
    desc: "Spearheaded the creative direction for all event branding, poster design, and digital content — shaping how GDG communicates visually on campus.",
    icon: Award,
  },
  {
    role: "Hackathon Pitching Host",
    org: "GDG Offline Hackathon",
    desc: "Orchestrated the pitching segment of GDG's offline hackathon, ensuring smooth flow, clear communication, and an engaging experience for participants.",
    icon: Mic,
  },
  {
    role: "Management Lead",
    org: "College Badminton Tournament",
    desc: "Managed end-to-end logistics and coordination for the college-wide badminton tournament, from scheduling to execution.",
    icon: Medal,
  },
  {
    role: "Design Contributor",
    org: "Sports Club, IEEE Club & Events",
    desc: "Delivered impactful posters and promotional materials across multiple campus organizations, maintaining visual consistency and creative quality.",
    icon: Users,
  },
];

const cardVariants = {
  hidden: (i: number) => ({ opacity: 0, x: i % 2 === 0 ? -50 : 50 }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeInOut' as const },
  }),
};

const ExperienceSection = () => (
  <SectionWrapper id="experience" className="section-gradient">
    <div className="max-w-7xl mx-auto">
      <motion.div variants={childVariants} className="text-center mb-20">
        <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4 font-body">Journey</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Experience & <span className="gradient-text">Contributions</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ x: 8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="glass-card gradient-border p-7 flex gap-6 items-start group"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/80 flex-shrink-0 flex items-center justify-center group-hover:shadow-[0_0_28px_hsl(var(--glow-soft)/0.2)] transition-all duration-500">
              <exp.icon size={22} className="text-accent" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-[15px]">{exp.role}</h3>
              <p className="text-xs text-accent font-body mb-2 tracking-wide">{exp.org}</p>
              <p className="text-sm text-muted-foreground font-body leading-[1.8]">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
