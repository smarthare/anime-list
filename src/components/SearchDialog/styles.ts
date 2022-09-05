import { styled } from "@mui/material/styles";
import { ButtonBase, Dialog, DialogTitle } from "@mui/material";

export const StyledDialog = styled(Dialog)`
  & .MuiDialog-container {
    align-items: flex-start;
  }

  & .MuiPaper-root {
    background: none;
    box-shadow: none;
    border: 0;
    margin-top: 150px;
  }

  & .MuiDialogContent-root {
    background: #fff;
    border-radius: 32px;
    padding-top: 0;
  }

  & .MuiSvgIcon-fontSizeSmall {
    &:hover {
      cursor: pointer;
    }
  }

  & .MuiCircularProgress-root {
    position: absolute;
    top: 42px;
    right: 15px;
    color: #ccc;
  }
`;

export const StyledDialogTitle = styled(DialogTitle)`
  width: 100%;
  margin: 0;
  padding: 30px 0;
  position: relative;
  border: 0;

  & div {
    margin: 0;
  }
`;

export const StyledCloseButton = styled(ButtonBase)`
  position: absolute;
  color: #fff;
  top: 0;
  right: 0;
`;

export const StyledInput = styled("input")`
  width: 100%;
  height: 64px;
  margin: 0;
  padding: 0 35px;
  border: 0;
  outline: 0;
  border-radius: 50px;
  background: #fff;
  font-size: 16px;
  font-family: Inter;
  color: #000;
  text-overflow: ellipsis;
`;
