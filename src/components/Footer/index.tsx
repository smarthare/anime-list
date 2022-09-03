import { ArrowUpward } from "@mui/icons-material";
import { Box, Typography, Theme, useTheme } from "@mui/material";
import { StyledFooter, StyledFooterContent } from "./styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Footer() {
  const theme: Theme = useTheme();

  return (
    <StyledFooter>
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
        <button><KeyboardArrowUpIcon /></button>
      </StyledFooterContent>
    </StyledFooter>
  );
}

export default Footer;
