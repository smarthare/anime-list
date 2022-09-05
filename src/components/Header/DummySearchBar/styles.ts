import { styled } from "@mui/material/styles";

export const InputWrapper = styled("div")`
  width: 400px;
  margin: 0 20px 0 20px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  border-radius: 32px;
  background: #eee;

  & svg {
    color: #ccc;
  }
`;

export const StyledInput = styled("input")`
  padding: 9px;
  padding-left: 10px;
  font-size: 14px;
  font-family: Inter;
  border: 0;
  outline: 0;
  flex-grow: 1;

  &:hover {
    cursor: pointer;
  }
`;
