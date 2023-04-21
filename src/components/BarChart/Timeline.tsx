import BarChart from "./BarChart";
import BarChartCurrent from "./BarChartCurrent";

export default function Timeline({ current }: { current: string }) {
  return (
    <>
      <div>
        {current === "2022" && <BarChart />}
        {current === "2023" && <BarChartCurrent />}
      </div>
    </>
  );
}
