import Image from "next/image";

import { Typography } from "@mui/material";

import { IAnimeCardProps } from "../../types/components";
import { ImageWrapper, TitleWrapper } from "./styles";

function AnimeCard({ anime }: IAnimeCardProps) {
  return (
    <>
      <ImageWrapper>
        <Image
          src={anime.images.jpg.image_url}
          layout="fill"
          objectFit="cover"
        />
        <TitleWrapper>
          <Typography
            position="absolute"
            bottom="11px"
            left="12px"
            fontSize="16px"
            fontWeight="bold"
            color="#fff"
          >
            {anime.title}
          </Typography>
        </TitleWrapper>
      </ImageWrapper>
    </>
  );
}

export default AnimeCard;
