import { motion } from "motion/react"

type FadeInProps = {
  children: React.ReactNode;
};

export default function FadeIn({ children }: FadeInProps) {
  return (
    <motion.div className="w-full h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}