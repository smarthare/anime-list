import SearchIcon from "@mui/icons-material/Search";

import { IDummySearchBarProps } from "../../../types/components";
import { InputWrapper, StyledInput } from "./styles";

function DummySearchBar({ onClick }: IDummySearchBarProps) {
  return (
    <InputWrapper onClick={onClick}>
      <SearchIcon />
      <StyledInput placeholder="Search..." disabled />
    </InputWrapper>
  );
}

export default DummySearchBar;
