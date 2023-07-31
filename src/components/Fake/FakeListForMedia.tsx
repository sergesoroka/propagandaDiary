import Media from "./Media";
import useLangSwitcher from "../../../utils/i18n/useLangSwitcher";

const FakeListForMedia = ({
  narrative,
  country,
  media,
}: {
  narrative?: string;
  country?: string;
  media?: string;
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
