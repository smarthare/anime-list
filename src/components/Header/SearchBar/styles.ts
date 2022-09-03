import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const StyledInput = styled(TextField)`
  width: 362px;
  border-radius: 50px;
  background: #eee;
  margin: 0 20px 0 20px;

  & input {
    padding: 7.5px;
    padding-left: 0;
    font-size: 14px;
    font-family: Inter;

    &:hover {
      cursor: pointer;
    }
  }

  & fieldset {
    border: 0;
    color: #ddd;
  }
`;
