import {
  AppBar,
  Typography,
  Theme,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { today, todayMobile } from "../../utils/datetime";
import SearchBar from "./SearchBar";
import { StyledToolbar } from "./styles";

function Header() {
  const theme: Theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
          {isMobile ? todayMobile() : today()}
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
