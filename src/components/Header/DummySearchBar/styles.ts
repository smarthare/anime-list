import { styled } from "@mui/material/styles";

export const InputWrapper = styled("div")`
  max-width: 400px;
  margin: 0 10px 0 10px;
  padding: 5.5px 0;
  padding-left: 10px;
  display: flex;
  align-items: center;
  border-radius: 32px;
  background: #eee;
  flex-grow: 1;
  font-size: 14px;
  color: #BABABA;

  & svg {
    color: #BABABA;
    width: 36px;
  }

  &:hover {
    cursor: pointer;
  }
`;
