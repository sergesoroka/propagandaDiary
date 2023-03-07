import { uniqueNarrativesEn } from "../../../utils/statisticCalculate";
import styles from './LatestNarratives.module.css'

const LatestNarratives = () => {
 
  return (
    <div  className={styles.narrativeWrap}>
      {uniqueNarrativesEn.map((narrative, i) => {
        return (
          <>
            <h1 className={styles.narrativeHeading} key={i}>{narrative}</h1>
            <hr style={{height: '4px', background: '#FF2618', border: 'none'}}/>
            <p className={styles.narrativeTag} ># TAG</p>
          </>
        );
      })}
    </div>
  );
};

export default LatestNarratives;
