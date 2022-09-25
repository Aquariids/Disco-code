import { AnimatePresence, motion } from "framer-motion";
import s from "./Articles.module.css";
import Card from "./Card/Card";
const Articles = () => {
  return (
    <div className={s.articles}>
      <AnimatePresence>
        <motion.div
        key={1}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
        >
          <Card text={"JavaScript"} color={"js"} url={"/js"} />
        </motion.div>
        <motion.div
        key={2}
          initial={{ scale: 0 }}
          animate={{  scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
        >
          <Card text={"React"} color={"react"} url={"/react"} />
        </motion.div>
        <motion.div
        key={3}
          initial={{ scale: 0 }}
          animate={{  scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
        >
          <Card text={"TypeScript"} color={"ts"} url={"/ts"} />
        </motion.div>

        <motion.div
        key={4}
          initial={{ scale: 0 }}
          animate={{  scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
        >
          <Card text={"Next.js"} color={"next"} url={"/next"} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Articles;
