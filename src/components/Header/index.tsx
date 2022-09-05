import { useState } from "react";
import dynamic from "next/dynamic";

import { Typography, useMediaQuery } from "@mui/material";

import { today, todayMobile } from "utils/datetime";
import { StyledAppBar, StyledToolbar } from "./styles";

const DummySearchBar = dynamic(() => import("./DummySearchBar"));
const SearchDialog = dynamic(() => import("../SearchDialog"));

function Header() {
  const isSmall = useMediaQuery("@media (max-width:800px)");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledAppBar position="sticky" sx={{}}>
        <StyledToolbar>
          <Typography
            variant="h1"
            fontSize="24px"
            fontWeight="bold"
            color="#000"
          >
            Anime
          </Typography>

          <DummySearchBar onClick={handleClickOpen} />

          <Typography fontSize="14px" whiteSpace="nowrap">
            {isSmall ? todayMobile() : today()}
          </Typography>
        </StyledToolbar>

        <SearchDialog open={open} handleClose={handleClose} />
      </StyledAppBar>
    </>
  );
}

export default Header;
