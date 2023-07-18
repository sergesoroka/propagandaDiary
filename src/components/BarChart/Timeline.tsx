import BarChart from "./BarChart";
import BarChartCurrent from "./BarChartCurrent";

export default function Timeline({
  current,
  setMedia,
}: {
  current: string;
  setMedia?: (media: string) => {};
}) {
  return (
    <>
      <div>
        {current === "2022" && <BarChart setMedia={setMedia} />}
        {current === "2023" && <BarChartCurrent setMedia={setMedia} />}
      </div>
    </>
  );
}
