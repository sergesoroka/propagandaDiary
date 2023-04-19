import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../Header.module.css";
import SearchIcon from "@/components/Icons/SearchIcon";
import SpetialText from "../../../../data/SpetialText";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <ul className={styles.navbarWrap}>
      <Link href="/narratives">
        <li className={pathname === "/narratives" ? styles.activeLink : ""}>
          <SpetialText name={"All_narratives"} />
        </li>
      </Link>
      <Link href="/about">
        <li className={pathname === "/about" ? styles.activeLink : ""}>
          <SpetialText name={"About"} />
        </li>
      </Link>
      <Link href="/lists">
        <li className={pathname === "/lists" ? styles.activeLink : ""}>
          {/* <SpetialText name={"Lists"} /> */}
          Lists
        </li>
      </Link>

      {/* <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSdHdlCAbi-plsJ49Q_daSIMPud7rzIaeQLwcvtYnjEnFOn1eA/viewform"
        passHref
        target="_blank"
      >
        <li>
          <SpetialText name={"Add_Fake"} />
        </li>
      </Link> */}

      <Link
        href="https://docs.google.com/spreadsheets/d/1j5JuUDCpc7T9cAXqHC7MOe8mBsOJiw1SH5JzoUxFIYk/edit#gid=0"
        passHref
        target="_blank"
      >
        <li>
          <SpetialText name={"Download"} />
        </li>
      </Link>
      <Link href="/archive">
        <li className={pathname === "/archive" ? styles.activeLink : ""}>
          <SpetialText name={"Archive"} />
        </li>
      </Link>
      <Link href="/search">
        <li style={{ marginTop: "4px" }}>
          <SearchIcon />
        </li>
      </Link>
    </ul>
  );
};

export default Navbar;
