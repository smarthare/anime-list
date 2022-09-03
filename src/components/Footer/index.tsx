import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import AnimeButton from "../AnimeButton";
import { StyledFooter, StyledFooterContent } from "./styles";

function Footer() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <StyledFooter isOpen={open}>
      <motion.div layout className="child">
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
              Awesome! Good approach to check right fits.
            </Typography>
          </Box>
          <AnimeButton buttonType="up" onClick={() => setOpen(!open)} />
        </StyledFooterContent>
      </motion.div>
    </StyledFooter>
  );
}

export default Footer;
