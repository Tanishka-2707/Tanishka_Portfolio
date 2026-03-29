import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, Users, Mic, Medal } from "lucide-react";

const experiences = [
  {
    role: "Creative Lead",
    org: "GDG on Campus IIIT Kalyani",
    desc: "Lead the creative team for all event branding, poster design, and digital content strategy.",
    icon: Award,
  },
  {
    role: "Hackathon Pitching Host",
    org: "GDG Offline Hackathon",
    desc: "Hosted and coordinated the pitching event for GDG's offline hackathon, managing participants and flow.",
    icon: Mic,
  },
  {
    role: "Management Lead",
    org: "College Badminton Tournament",
    desc: "Led the management and logistics for the college-wide badminton tournament.",
    icon: Medal,
  },
  {
    role: "Design Contributor",
    org: "Sports Club, IEEE Club & Events",
    desc: "Created posters and promotional materials for multiple college clubs and campus-wide events.",
    icon: Users,
  },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience" className="section-gradient">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Journey</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Experience & <span className="gradient-text">Contributions</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card-hover p-6 flex gap-5 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex-shrink-0 flex items-center justify-center">
              <exp.icon size={22} className="text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">{exp.role}</h3>
              <p className="text-sm text-accent font-body mb-1">{exp.org}</p>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
