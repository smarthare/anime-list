import { styled } from "@mui/material/styles";

export const ImageWrapper = styled("span")`
  width: 20%;
  max-width: 70px;
  min-width: 70px;

  & img {
    border-radius: 5px;
  }
`;

export const TypographyWrapper = styled("span")`
  width: 70%;
  flex-grow: 1;
`