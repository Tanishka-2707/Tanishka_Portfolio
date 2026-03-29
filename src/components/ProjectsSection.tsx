import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Eye } from "lucide-react";

const projects = [
  {
    title: "GDG on Campus Posters",
    category: "Graphic Design",
    desc: "Event posters and promotional materials for Google Developer Groups on Campus IIIT Kalyani.",
    figmaLink: "#",
  },
  {
    title: "Sports Club Branding",
    category: "Branding",
    desc: "Visual identity and event posters for the Sports Club of IIIT Kalyani.",
    figmaLink: "#",
  },
  {
    title: "IEEE Club Designs",
    category: "Graphic Design",
    desc: "Creative posters and digital assets for IEEE Club events and campaigns.",
    figmaLink: "#",
  },
  {
    title: "College Event Creatives",
    category: "Event Design",
    desc: "Posters and branding materials for various college-wide events and fests.",
    figmaLink: "#",
  },
  {
    title: "Social Media Content",
    category: "Digital Design",
    desc: "Reels covers, story templates, and social media graphics for campus organizations.",
    figmaLink: "#",
  },
  {
    title: "UI Explorations",
    category: "UI Design",
    desc: "Personal UI design explorations and concept interfaces built in Figma.",
    figmaLink: "#",
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Work</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Selected <span className="gradient-text">Projects</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card-hover group overflow-hidden"
          >
            <div className="h-44 bg-gradient-to-br from-secondary via-muted to-secondary flex items-center justify-center">
              <span className="text-4xl font-heading font-bold text-muted-foreground/30 group-hover:text-accent/40 transition-colors duration-500">
                {project.title.split(" ").map(w => w[0]).join("")}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-accent mb-2 font-body">{project.category}</p>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-xs text-accent hover:text-foreground transition-colors font-body"
                >
                  <Eye size={14} /> View Details
                </motion.button>
                <a
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors font-body"
                >
                  <ExternalLink size={14} /> Open in Figma
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
