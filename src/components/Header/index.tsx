import { AppBar, Typography, Theme, useTheme } from "@mui/material";
import SearchBar from "./SearchBar";
import { StyledToolbar } from "./styles";

function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: 1,
        height: "58px",
        display: "flex",
        alignItems: "center",
      }}
    >
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
          Today
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
