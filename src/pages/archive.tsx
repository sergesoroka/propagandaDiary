import styles from "@/styles/Home.module.css";
import StatisticDisplay from "@/components/StatisticDisplay/StatisticDisplay";

import {
  commonStatistic,
} from "../../utils/statisticCalculate";

const archive = () => {
  return (
    <div className={styles.archivePage}>
      <StatisticDisplay
        mode="disactive"
        month="January"
        narratives={
          commonStatistic("2022-01-01", "2022-01-31", "Narrative").length
        }
        fakes={commonStatistic("2022-01-01", "2022-01-31", "Fake").length}
        sources={commonStatistic("2022-01-01", "2022-01-31", "Media").length}
      />
      <StatisticDisplay
        mode="disactive"
        month="February"
        narratives={
          commonStatistic("2022-02-01", "2022-02-31", "Narrative").length
        }
        fakes={commonStatistic("2022-02-01", "2022-02-31", "Fake").length}
        sources={commonStatistic("2022-02-01", "2022-02-31", "Media").length}
      />
      <StatisticDisplay
        mode="disactive"
        month="March"
        narratives={
          commonStatistic("2022-03-01", "2022-03-31", "Narrative").length
        }
        fakes={commonStatistic("2022-03-01", "2022-03-31", "Fake").length}
        sources={commonStatistic("2022-03-01", "2022-03-31", "Media").length}
      />
      <StatisticDisplay
        mode="disactive"
        month="April"
        narratives={
          commonStatistic("2022-04-01", "2022-04-31", "Narrative").length
        }
        fakes={commonStatistic("2022-04-01", "2022-04-31", "Fake").length}
        sources={commonStatistic("2022-04-01", "2022-04-31", "Media").length}
      />
      <StatisticDisplay
        mode="disactive"
        month="May"
        narratives={
          commonStatistic("2022-05-01", "2022-05-31", "Narrative").length
        }
        fakes={commonStatistic("2022-05-01", "2022-05-31", "Fake").length}
        sources={commonStatistic("2022-05-01", "2022-05-31", "Media").length}
      />
      <StatisticDisplay
        mode="disactive"
        month="June"
        narratives={
          commonStatistic("2022-06-01", "2022-06-31", "Narrative").length
        }
        fakes={commonStatistic("2022-06-01", "2022-06-31", "Fake").length}
        sources={commonStatistic("2022-06-01", "2022-06-31", "Media").length}
      />
      <StatisticDisplay
        mode="disactive"
        month="July"
        narratives={
          commonStatistic("2022-07-01", "2022-07-31", "Narrative").length
        }
        fakes={commonStatistic("2022-07-01", "2022-07-31", "Fake").length}
        sources={commonStatistic("2022-07-01", "2022-07-31", "Media").length}
      />
      <StatisticDisplay
        mode="disactive"
        month="August"
        narratives={
          commonStatistic("2022-08-01", "2022-08-31", "Narrative").length
        }
        fakes={commonStatistic("2022-08-01", "2022-08-31", "Fake").length}
        sources={commonStatistic("2022-08-01", "2022-08-31", "Media").length}
      />
      <StatisticDisplay
        mode="disactive"
        month="September"
        narratives={
          commonStatistic("2022-09-01", "2022-09-31", "Narrative").length
        }
        fakes={commonStatistic("2022-09-01", "2022-09-31", "Fake").length}
        sources={commonStatistic("2022-09-01", "2022-09-31", "Media").length}
      />
      <StatisticDisplay
        mode="disactive"
        month="October"
        narratives={
          commonStatistic("2022-10-01", "2022-10-31", "Narrative").length
        }
        fakes={commonStatistic("2022-10-01", "2022-10-31", "Fake").length}
        sources={commonStatistic("2022-10-01", "2022-10-31", "Media").length}
      />
      <StatisticDisplay
        mode="disactive"
        month="November"
        narratives={
          commonStatistic("2022-11-01", "2022-11-31", "Narrative").length
        }
        fakes={commonStatistic("2022-11-01", "2022-11-31", "Fake").length}
        sources={commonStatistic("2022-11-01", "2022-11-31", "Media").length}
      />
      <StatisticDisplay
        mode="disactive"
        month="December"
        narratives={
          commonStatistic("2022-12-01", "2022-12-31", "Narrative").length
        }
        fakes={commonStatistic("2022-12-01", "2022-12-31", "Fake").length}
        sources={commonStatistic("2022-12-01", "2022-12-31", "Media").length}
      />
    </div>
  );
};

export default archive;
