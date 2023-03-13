import Logo from "../Logo/Logo";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <div>
        <svg
          className={styles.mobileMenuIcon}
          width="28"
          height="14"
          viewBox="0 0 28 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="12" width="28" height="2" fill="#676767" />
          <rect y="6" width="28" height="2" fill="#676767" />
          <rect width="28" height="2" fill="#676767" />
        </svg>
        <div className={styles.desctopMenu}>
          <LangSwitcher />
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
