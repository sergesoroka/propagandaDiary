import Media from "./Media";
import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";
import styles from "./Fake.module.css";

const FakeListForMedia = ({
  narrative,
  month,
  year,
  tagName,
  country,
  media,
  setMedia,
}: {
  narrative?: string;
  month?: string;
  year?: string;
  tagName?: string;
  country?: string;
  media?: string;
  setMedia?: (media: string) => {};
}) => {
  const { data } = useLangSwitcher();

  const uniqueFakesByMedia: string[] = [];

  // @ts-ignore
  data.map((c) => {
    if (
      !uniqueFakesByMedia.includes(c.Fake) &&
      c.Narrative === narrative &&
      c.Country === country &&
      c.Media === media
    ) {
      uniqueFakesByMedia.push(c.Fake);
    }
  });

  const renderedFakesByMedia = uniqueFakesByMedia.map((fake, i) => {
      // @ts-ignore
    return <Media key={i} fake={fake} country={country} media={media} />;
  });

  return <div>{renderedFakesByMedia}</div>;
};

export default FakeListForMedia;
