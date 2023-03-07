import Logo  from "../Logo/Logo";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <LangSwitcher />
    </div>
  );
};

export default Header;
