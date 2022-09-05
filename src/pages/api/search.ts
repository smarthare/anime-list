import { getAnimesByQuery } from "../../service/jikan";
import { SearchApiRequest, SearchApiResponse } from "../../types/apis";

export default async function handler(
  req: SearchApiRequest,
  res: SearchApiResponse
) {
  const candidates = await getAnimesByQuery(req.query.query);

  res
    .status(200)
    .json(candidates.filter((candidate: any, ind: number) => ind < 5));
}
