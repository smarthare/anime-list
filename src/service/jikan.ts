import axios from "axios";
import { Anime } from "../types/animes";

const getAnimesByPage = async (page: number) =>
  axios
    .get(`https://api.jikan.moe/v4/recommendations/anime?page=${page}`)
    .then(({ data }) => data.data)
    .catch((error) => {
      console.error(error);
      return [];
    });

export const getAnimes = async (page: number) => {
  const apiPage = Math.floor((page * 12) / 100) + 1;

  const preAnimes = await getAnimesByPage(apiPage);
  let animes;

  if ((page * 12) % 100 < 12 && apiPage > 1) {
    animes = preAnimes.concat(await getAnimesByPage(apiPage - 1));
  } else {
    animes = preAnimes;
  }

  const start = (page - 1) * 12;
  const end = page * 12 - 1;

  return animes.filter(
    (anime: Anime, ind: number) => ind >= start && ind <= end
  );
};