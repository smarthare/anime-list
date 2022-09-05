import { useRouter } from "next/router";

import { Grid, Typography, useTheme } from "@mui/material";

import AnimeCard from "components/AnimeCard";
import AnimeButton from "components/AnimeButton";
import { RecommendedComponentTypes } from "types/components";

const Recommended = ({ animes, page }: RecommendedComponentTypes) => {
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
              <AnimeCard anime={anime} />
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
  );
};

export default Recommended;
