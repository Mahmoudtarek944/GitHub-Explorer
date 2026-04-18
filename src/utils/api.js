import axios from "axios";

export async function getData(pageNum) {
  const res = await axios(
    `https://api.github.com/search/repositories?q=QUERY&sort=stars&per_page=12&${pageNum}`,
  );
  if (res.status === 200) {
    console.log(res.data.items);
    return res.data.items;
  }
  return null;
}
