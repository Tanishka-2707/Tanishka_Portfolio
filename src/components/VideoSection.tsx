import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Travel Buddy App — Commercial",
    desc: "A commercial video created from scratch for a travel buddy application concept.",
    type: "Commercial",
    url: "https://drive.google.com/file/d/1T5pfZrLJJ_dgwPePTGYYNAk94I0bTadl/view?usp=drive_link",
    thumbnail: "/T2.jpeg",
  },
  {
    title: "GDG Reels & Promos",
    desc: "Promotional reels and video edits for GDG on Campus IIIT Kalyani events and campaigns.",
    type: "Documentary",
    url: "https://drive.google.com/file/d/1TAl9BAvvqyLsNk1wgYuECzhRhwMljXv5/view?usp=drive_link",
    thumbnail: "T3.jpeg",
  },
  {
    title: "Copyright Law Documentary",
    desc: "An educational documentary exploring copyright law, produced and edited from scratch.",
    type: "Social Media",
    url: "https://drive.google.com/file/d/1hpTCQJsuiBC-PopTE4ijtDa55CujcVwr/view?usp=drive_link",
    thumbnail: "/T1.jpeg",
  },
];

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  return (
    <>
      <SectionWrapper id="videos">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Motion</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Video <span className="gradient-text">Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videos.map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card-hover group overflow-hidden cursor-pointer"
                // onClick={() => setSelectedVideo(video)}
              >
                <a href={video.url} target="_blank">
                <div className="h-48 bg-gradient-to-br from-burgundy/30 via-secondary to-muted flex items-center justify-center relative overflow-hidden">
                  {/* Thumbnail Background */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="relative z-10 w-14 h-14 rounded-full bg-accent/30 backdrop-blur-sm border border-accent/50 flex items-center justify-center group-hover:bg-accent/50 transition-colors"
                  >
                    <Play size={22} className="text-white ml-0.5" fill="currentColor" />
                  </motion.div>

                  {/* Type Badge */}
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest bg-accent/80 text-white px-2 py-1 rounded-full font-body backdrop-blur-sm">
                    {video.type}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{video.desc}</p>
                </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default VideoSection;
