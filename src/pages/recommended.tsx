import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import { Grid, Typography, useTheme } from "@mui/material";

import Layout from "../components/Layout";
import AnimeCard from "../components/AnimeCard";
import AnimeButton from "../components/AnimeButton";
import { getAnimes } from "../service/jikan";
import { RecommendedTypes } from "../types/components";

const Recommended: NextPage<RecommendedTypes> = ({ animes, page }) => {
  const router = useRouter();
  const theme = useTheme();

  const handleNextPage = () => {
    router.push(`?page=${page + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`?page=${page - 1}`);
  };

  return (
    <Layout showHeader>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={5}
        width={theme.breakpoints.values.md + 40}
        paddingX={"20px"}
      >
        {animes.map((anime, ind) => (
          <AnimeCard anime={anime} key={`card-${ind}-${anime.mal_id}`} />
        ))}

        <Grid
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={3}
        >
          <AnimeButton
            buttonType="prev"
            onClick={handlePrevPage}
            disabled={page === 1}
          />
          <Typography fontFamily="Inter" fontSize="16px" fontWeight="bold">
            {page}
          </Typography>
          <AnimeButton buttonType="next" onClick={handleNextPage} />
        </Grid>
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

  const page = Number(query.page);
  const vaildPage = isNaN(page) || page < 1 ? 1 : page;
  const animes = await getAnimes(vaildPage);

  return {
    props: {
      animes,
      page: vaildPage,
    },
  };
};

export default Recommended;
