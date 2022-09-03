import { Typography, useMediaQuery } from "@mui/material";

import SearchBar from "./SearchBar";
import { today, todayMobile } from "../../utils/datetime";
import { StyledAppBar, StyledToolbar } from "./styles";

function Header() {
  const isMobile = useMediaQuery("@media (max-width:800px)");

  return (
    <StyledAppBar position="sticky" sx={{}}>
      <StyledToolbar>
        <Typography
          variant="h1"
          fontSize="24px"
          fontFamily="Inter"
          fontWeight="bold"
          color="#000"
        >
          Anime
        </Typography>
        <SearchBar />
        <Typography fontFamily="Inter" fontSize="14px" whiteSpace="nowrap">
          {isMobile ? todayMobile() : today()}
        </Typography>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
