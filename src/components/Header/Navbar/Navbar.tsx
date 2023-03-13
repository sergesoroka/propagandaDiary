import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../Header.module.css";

const Navbar = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  console.log(pathname, asPath);

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
      <li>Add Fake</li>
      <li>Download</li>
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
