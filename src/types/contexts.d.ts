import { Anime } from "./animes";

export interface IAnimeContext {
  animes: Array<Anime>;
  pageAnimes: Array<Anime>;
  page: number;
  apiPage: number;
  changePage: Function;
  initAnimes: Function;
}