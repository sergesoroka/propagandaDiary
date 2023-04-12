import Search from "@/components/Search/Search";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

const search = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "tween" }}
      className={styles.mainLeft}
    >
      <Search />
    </motion.div>
  );
};

export default search;
