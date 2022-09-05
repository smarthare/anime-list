import SearchIcon from "@mui/icons-material/Search";

import { IDummySearchBarProps } from "../../../types/components";
import { InputWrapper } from "./styles";

function DummySearchBar({ onClick }: IDummySearchBarProps) {
  return (
    <InputWrapper onClick={onClick}>
      <SearchIcon />
      Search...
    </InputWrapper>
  );
}

export default DummySearchBar;
