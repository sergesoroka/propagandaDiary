import Logo from "../Logo/Logo";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <div>
        <LangSwitcher />
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
