import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import AnimeButton from "../AnimeButton";
import { StyledFooter, StyledFooterContent } from "./styles";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  return (
    <StyledFooter>
      <motion.div layout>
        <StyledFooterContent>
          <Box>
            <Typography
              variant="h2"
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="bold"
            >
              Tony Xu
            </Typography>
            <Typography fontFamily="Inter" fontSize="12px" color="#929292">
              Awesome! Good approach to check right candidates.
            </Typography>
          </Box>

          <AnimeButton buttonType="up" onClick={handleClick} />
        </StyledFooterContent>
      </motion.div>
    </StyledFooter>
  );
}

export default Footer;
