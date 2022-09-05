import axios, { AxiosError } from "axios";

import { Anime } from "types/animes";

const JIKAN_MAIN_URL = "https://api.jikan.moe/v4";

export const getAnimesByPage = async (page: number) =>
  axios
    .get(`${JIKAN_MAIN_URL}/top/anime?page=${page}&limit=12&filter=favorite`)
    .then(({ data }) => data.data)
    .catch((error: AxiosError) => {
      console.error(error.message);
      return [];
    });

export const getAnimeById = async (id: number) =>
  axios
    .get(`${JIKAN_MAIN_URL}/anime/${id}`)
    .then(({ data }) => data.data)
    .catch((error: AxiosError) => {
      console.error(error.message);
      return [];
    });

export const getAnimesByQuery = async (q: string) =>
  axios
    .get(`${JIKAN_MAIN_URL}/anime?q=${q}`)
    .then(({ data }) => data.data.filter((anime: Anime, ind: number) => ind < 5))
    .catch((error: AxiosError) => {
      console.error(error.message);
      return [];
    });
