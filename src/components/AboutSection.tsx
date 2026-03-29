import SectionWrapper from "./SectionWrapper";

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Crafting visuals with <span className="gradient-text">purpose</span>
          </h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>
              I'm a Computer Science student at IIIT Kalyani with a deep passion for design. While code is my foundation,
              design is where I truly express myself — transforming raw ideas into visually compelling outputs that resonate.
            </p>
            <p>
              My design philosophy is rooted in clarity and intentionality. I believe every visual should serve a purpose,
              and every element should earn its place on the canvas. Clean over cluttered, always aligned with requirements,
              and crafted with aesthetic balance.
            </p>
            <p>
              Currently exploring the world of UI/UX design, I'm focused on bridging the gap between beautiful interfaces
              and meaningful user experiences.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="glass-card p-8 max-w-sm">
            <div className="space-y-4">
              {[
                { label: "Education", value: "B.Tech CSE, IIIT Kalyani" },
                { label: "Focus", value: "Graphic & UI Design" },
                { label: "Passion", value: "Visual Storytelling" },
                { label: "Goal", value: "UI/UX Designer" },
              ].map((item) => (
                <div key={item.label} className="border-b border-border/50 pb-3 last:border-0">
                  <p className="text-xs uppercase tracking-widest text-accent mb-1 font-body">{item.label}</p>
                  <p className="text-foreground font-heading font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
