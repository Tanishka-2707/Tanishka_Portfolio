import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: Props) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={`relative py-24 md:py-32 lg:py-36 px-6 md:px-12 lg:px-20 ${className}`}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;
