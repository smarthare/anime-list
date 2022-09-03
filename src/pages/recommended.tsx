import type { GetServerSideProps, NextPage } from "next";
import { Grid } from "@mui/material";

import Layout from "../components/Layout";
import { Anime } from "../types/animes";
import { getAnimes } from "../services/jikan";

const Recommended: NextPage<{ animes: Array<Anime> }> = ({ animes }) => {
  return (
    <Layout showHeader>
      <Grid container gap={1}>
        {animes.map((anime, ind) => (
          <Grid item key={`card-${ind}`} width="200px" height="240px">
            {anime.content}
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const page = query.page || 1;
  const animes = await getAnimes(Number(page.toString()));

  return {
    props: {
      animes,
    },
  };
};

export default Recommended;
