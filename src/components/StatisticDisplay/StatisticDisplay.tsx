import styles from "./StatisticDisplay.module.css";
import { uniqueNarrativesEn } from '../../../utils/statisticCalculate'
import { uniqueFakesEn } from '../../../utils/statisticCalculate'
import { uniqueSourcesEn } from '../../../utils/statisticCalculate'

const StatisticDisplay = () => {
  return (
    <>
    <div className={styles.cardsWrap}>
      <div className={styles.card}>
        <p className={styles.cardNumber}>{uniqueNarrativesEn.length}</p>
        <p className={styles.cardCategory}>Narratives</p>
      </div>
      <div className={styles.card}>
        <p className={styles.cardNumber}>{uniqueFakesEn.length}</p>
        <p className={styles.cardCategory}>Fakes</p>
      </div>
      <div className={styles.card}>
        <p className={styles.cardNumber}>{uniqueSourcesEn.length}</p>
        <p className={styles.cardCategory}>Sources</p>
      </div>
    </div>
    <p  className={styles.subtitle}>Загальна статистика</p>
    </>
  );
};

export default StatisticDisplay;
