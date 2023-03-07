import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <span className={styles.logoText}>Propaganda Diary</span>
      </div>
    </Link>
  );
};

export default Logo;
