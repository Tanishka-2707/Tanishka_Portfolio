import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Play } from "lucide-react";

const videos = [
  { title: "Travel Buddy App — Commercial", desc: "A commercial video created from scratch for a travel buddy application concept.", type: "Commercial" },
  { title: "Copyright Law Documentary", desc: "An educational documentary exploring copyright law, produced and edited from scratch.", type: "Documentary" },
  { title: "GDG Reels & Promos", desc: "Promotional reels and video edits for GDG on Campus IIIT Kalyani events and campaigns.", type: "Social Media" },
];

const VideoSection = () => (
  <SectionWrapper id="videos">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4 font-body">Motion</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Video <span className="gradient-text">Work</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {videos.map((video, i) => (
          <motion.div
            key={video.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -8 }}
            className="glass-card gradient-border group overflow-hidden cursor-pointer"
          >
            <div className="h-52 bg-gradient-to-br from-burgundy/20 via-secondary to-muted/80 flex items-center justify-center relative overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-16 h-16 rounded-full bg-accent/15 backdrop-blur-md border border-accent/20 flex items-center justify-center group-hover:bg-accent/25 group-hover:shadow-[0_0_40px_hsl(var(--glow-soft)/0.3)] transition-all duration-500"
              >
                <Play size={24} className="text-accent ml-0.5" fill="currentColor" />
              </motion.div>
              <span className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.2em] bg-accent/10 text-accent px-3 py-1.5 rounded-full font-body backdrop-blur-md border border-accent/10">
                {video.type}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{video.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{video.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default VideoSection;
