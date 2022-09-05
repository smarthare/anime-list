import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import { Divider, Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Layout from "../../components/Layout";
import { getAnimeById } from "../../service/jikan";
import { IAnimeCardProps } from "../../types/components";
import { Anime } from "../../types/animes";
import {
  StyledGrid,
  StyledButton,
  ImageWrapper,
  ContentWrapper,
} from "./styles";

const properties = ["type", "source", "episodes", "status"];
const fames = ["score", "rank", "popularity"];

const DetailPage: NextPage<IAnimeCardProps> = ({ anime }) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Layout>
      <StyledGrid>
        <StyledButton onClick={handleClick}>
          <ArrowBackIosIcon />
          Go to back button
        </StyledButton>

        <Grid container>
          <ImageWrapper>
            <Image
              src={anime.images.jpg.image_url}
              alt={anime.title}
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>

          <ContentWrapper
            item
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography
              fontSize="24px"
              fontWeight="bold"
              display="flex"
              alignItems="center"
              marginBottom="20px"
            >
              {anime.title}
              {anime.approved && <CheckCircleIcon />}
            </Typography>

            <Grid>
              {properties.map((property) => (
                <Grid
                  container
                  display="flex"
                  marginBottom="20px"
                  alignItems="center"
                  key={`anime-prop-${property}`}
                >
                  <Typography
                    fontSize="14px"
                    textTransform="capitalize"
                    color="#A7A7A7"
                  >
                    {property}
                  </Typography>

                  <Divider />

                  <Typography fontSize="14px" fontWeight="bold">
                    {(anime[property as keyof Anime] || "Unknown").toString()}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            <Grid container display="flex" justifyContent="space-between">
              {fames.map((fame) => (
                <Grid textAlign="right" key={`anime-prop-${fame}`}>
                  <Typography fontSize="20px" color="#A7A7A7">
                    {(anime[fame as keyof Anime] || "0").toLocaleString("en-US")}
                  </Typography>
                  <Typography
                    fontSize="20px"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    {fame}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </ContentWrapper>

          <Grid container>
            <Typography fontWeight="bold" marginTop="35px" width="100%">
              Description
            </Typography>
            <Typography fontSize="14px" marginTop="35px">
              {anime.synopsis}
            </Typography>
          </Grid>
        </Grid>
      </StyledGrid>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  params,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const id = Number(params?.slug);
  const anime = await getAnimeById(id);

  return {
    props: {
      anime,
    },
  };
};

export default DetailPage;
