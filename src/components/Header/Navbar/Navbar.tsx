import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../Header.module.css";

const Navbar = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <ul className={styles.navbarWrap}>
      <Link href="/about">
        <li className={pathname === "/about" ? styles.activeLink : ""}>
          About
        </li>
      </Link>
      <Link href="/method">
        <li className={pathname === "/method" ? styles.activeLink : ""}>
          Method
        </li>
      </Link>

      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSdHdlCAbi-plsJ49Q_daSIMPud7rzIaeQLwcvtYnjEnFOn1eA/viewform"
        passHref
        target="_blank"
      >
        <li className={pathname === "/method" ? styles.activeLink : ""}>
        Add Fake</li>
      </Link>
     
      <Link
        href="https://docs.google.com/spreadsheets/d/1j5JuUDCpc7T9cAXqHC7MOe8mBsOJiw1SH5JzoUxFIYk/edit#gid=0"
        passHref
        target="_blank"
      >
        <li className={pathname === "/method" ? styles.activeLink : ""}>
        Download</li>
      </Link>
      <Link href="/archive">
        <li className={pathname === "/archive" ? styles.activeLink : ""}>
          Archive
        </li>
      </Link>
      <li>Search</li>
    </ul>
  );
};

export default Navbar;
