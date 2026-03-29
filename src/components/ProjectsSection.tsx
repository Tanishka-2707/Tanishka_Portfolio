import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Eye } from "lucide-react";

const projects = [
  { title: "GDG on Campus Posters", category: "Graphic Design", desc: "Event posters and promotional materials for Google Developer Groups on Campus IIIT Kalyani.", figmaLink: "#" },
  { title: "Sports Club Branding", category: "Branding", desc: "Visual identity and event posters for the Sports Club of IIIT Kalyani.", figmaLink: "#" },
  { title: "IEEE Club Designs", category: "Graphic Design", desc: "Creative posters and digital assets for IEEE Club events and campaigns.", figmaLink: "#" },
  { title: "College Event Creatives", category: "Event Design", desc: "Posters and branding materials for various college-wide events and fests.", figmaLink: "#" },
  { title: "Social Media Content", category: "Digital Design", desc: "Reels covers, story templates, and social media graphics for campus organizations.", figmaLink: "#" },
  { title: "UI Explorations", category: "UI Design", desc: "Personal UI design explorations and concept interfaces built in Figma.", figmaLink: "#" },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4 font-body">Work</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Selected <span className="gradient-text">Projects</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -8 }}
            className="glass-card gradient-border group overflow-hidden cursor-pointer"
          >
            <div className="h-48 bg-gradient-to-br from-secondary via-muted/80 to-secondary flex items-center justify-center relative overflow-hidden">
              <span className="text-5xl font-heading font-bold text-muted-foreground/20 group-hover:text-accent/30 transition-all duration-700 group-hover:scale-110">
                {project.title.split(" ").map(w => w[0]).join("")}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-6 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-2.5 font-body">{project.category}</p>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2.5">{project.title}</h3>
              <p className="text-sm text-muted-foreground font-body mb-5 leading-relaxed">{project.desc}</p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-xs text-accent hover:text-foreground transition-colors font-body"
                >
                  <Eye size={13} strokeWidth={1.5} /> View Details
                </motion.button>
                <a
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors font-body"
                >
                  <ExternalLink size={13} strokeWidth={1.5} /> Figma
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
