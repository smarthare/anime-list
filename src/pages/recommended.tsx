import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import { Grid, Typography, useTheme } from "@mui/material";

import Layout from "../components/Layout";
import AnimeCard from "../components/AnimeCard";
import AnimeButton from "../components/AnimeButton";
import withMotion from "../hocs/withMotion";
import { getAnimesByPage } from "../service/jikan";
import { RecommendedPageTypes } from "../types/components";

const AnimeCardWithMotion = withMotion(AnimeCard);

const RecommendedPage: NextPage<RecommendedPageTypes> = ({
  animes,
  page,
}) => {
  const router = useRouter();
  const theme = useTheme();

  const handleNextPage = () => {
    router.push(`?page=${page + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`?page=${page - 1}`);
  };

  const handleCardClick = (malId: number) => () => {
    router.push(`/detail/${malId}`);
  };

  return (
    <Layout showHeader>
      <Grid container display="flex" justifyContent="center">
        <Grid
          container
          rowSpacing={3}
          columnSpacing={5}
          width={theme.breakpoints.values.md + 40}
          paddingX={2.5}
          minHeight="calc(100vh - 242px)"
        >
          {animes.length > 0 ? (
            animes.map((anime, ind) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                onClick={handleCardClick(anime.mal_id)}
                key={`card-${ind}-${anime.mal_id}`}
              >
                <AnimeCardWithMotion anime={anime} />
              </Grid>
            ))
          ) : (
            <Typography
              width="100%"
              fontSize="16px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Oops it seems there is nothing for page {page}
            </Typography>
          )}
        </Grid>

        <Grid
          container
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
          <Typography fontSize="16px" fontWeight="bold">
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

  const newPage = Number(query.page);
  const page = isNaN(newPage) || newPage < 1 ? 1 : newPage;
  const animes = await getAnimesByPage(page);

  return {
    props: {
      animes,
      page,
    },
  };
};

export default RecommendedPage;
