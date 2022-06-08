import { motion } from "framer-motion";

export const FadeInWhenVisible: React.FC<{}> = ({ children }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
