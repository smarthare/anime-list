import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

import { IAnimeCardProps } from "../../types/components";
import { ImageWrapper, TitleWrapper } from "./styles";

function AnimeCard({ anime }: IAnimeCardProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <ImageWrapper>
          <Image
            src={anime.entry[0].images.jpg.large_image_url}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "10px" }}
          />
          <TitleWrapper>
            <Typography
              position="absolute"
              bottom="11px"
              left="12px"
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="bold"
              color="#fff"
            >
              {anime.entry[0].title}
            </Typography>
          </TitleWrapper>
        </ImageWrapper>
      </motion.div>
    </Grid>
  );
}

export default AnimeCard;
