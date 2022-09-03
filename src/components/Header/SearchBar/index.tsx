import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledInput } from "./styles";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <StyledInput
      value={"Search..."}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      disabled
    />
  );
};

export default SearchBar;
