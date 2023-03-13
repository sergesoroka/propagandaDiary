import FakeList from "@/components/Fake/FakeList";

import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const tagPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { tag } = router.query;

  return (
    <div className={styles.mainLeft}>
      <p className={styles.tagHeading}># {tag}</p>
      <hr
        style={{
          height: "2px",
          background: "#FF2618",
          border: "none",
          width: "100%",
          marginBottom: "2rem",
        }}
      />
      <div>
        <FakeList />
      </div>
    </div>
  );
};

export default tagPage;
