import { motion } from "framer-motion";

export const FadeInAndUp: React.FC<{}> = ({ children }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 1, scale: 1, y: "100px" },
      }}
    >
      {children}
    </motion.div>
  );
};
