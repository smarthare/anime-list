import Image from "next/image";
import Link from "next/link";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { IAnimeCardProps } from "../../../types/components";
import { ImageWrapper, TypographyWrapper } from "./styles";

function CandidateRow({ anime }: IAnimeCardProps) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container marginTop={4} display="flex" alignItems="center">
      <ImageWrapper>
        <Image
          src={anime.images.jpg.image_url}
          alt={anime.title}
          width={50}
          height={50}
          objectFit="cover"
        />
      </ImageWrapper>

      <TypographyWrapper>
        <Typography fontSize="16px" textOverflow="break">
          {anime.title}
        </Typography>
        <Typography fontSize="16px" color="#757575">
          {`${anime.type} · ${anime.source} · ${anime.status}`}
        </Typography>
      </TypographyWrapper>

      {!isMobile && (
        <Link href={`/detail/${anime.mal_id}`}>
          <ArrowForwardIosIcon fontSize="small" htmlColor="#BDBDBD" />
        </Link>
      )}
    </Grid>
  );
}

export default CandidateRow;
