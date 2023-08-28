export default async function getNarrativeData(
  locale: string,
  per_page: string
) {
  const res = await fetch(
    `https://vox-dashboard.ra-devs.tech/api/narratives?per_page=${per_page}&lang=${locale}`
  );
  if (!res.ok) throw new Error("Fail to fetch data");
  return res.json();
}
