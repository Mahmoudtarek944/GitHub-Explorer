import axios from "axios";

export async function getData(query, pageNum) {
  const res = await axios(
    `https://api.github.com/search/repositories?q=${query}&sort=stars&per_page=100&page=${pageNum}`,
  );
  if (res.status === 200) {
    console.log(res.data.items);
    return res.data.items;
  }
  return null;
}
