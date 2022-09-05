import type { NextApiRequest, NextApiResponse } from "next";
import { AnimeDetail } from "./animes";

export interface SearchApiRequest extends NextApiRequest {
  query: {
    query: string;
  }
}

export type SearchApiResponse = {
  candidates: Array<AnimeDetail>;
} & NextApiResponse;
