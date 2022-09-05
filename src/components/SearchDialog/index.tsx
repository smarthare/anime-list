import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

import { CircularProgress, DialogContent, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import useDebounce from "hooks/useDebounce";
import withMotion from "hocs/withMotion";
import { ISearchDialogProps } from "types/components";
import { Anime } from "types/animes";
import {
  StyledCloseButton,
  StyledDialog,
  StyledDialogTitle,
  StyledInput,
} from "./styles";

const CandidateRow = dynamic(() => import("./CandidateLine"));

const DialogContentWithMotion = withMotion(DialogContent);

function SearchDialog({ open, handleClose }: ISearchDialogProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [candidates, setCandidates] = useState<Array<Anime>>();

  const debouncedKeyword = useDebounce(keyword, 500);

  const searchCandidates = async (query: string) => {
    setLoading(true);

    const newCandidates = await axios
      .get(`/api/search?query=${query}`)
      .then(({ data }) => data);
    setCandidates(newCandidates);

    setLoading(false);
  };

  useEffect(() => {
    debouncedKeyword
      ? searchCandidates(debouncedKeyword)
      : setCandidates(undefined);
  }, [debouncedKeyword]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="search-dialog"
      open={open}
      maxWidth="sm"
      fullWidth
    >
      <StyledDialogTitle id="search-dialog">
        <StyledInput
          value={keyword}
          key={keyword}
          placeholder="You can search for ‘Kyoukai no Kanata’ for example"
          onChange={handleChange}
          autoFocus
        />
        {loading && <CircularProgress />}

        <StyledCloseButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </StyledCloseButton>
      </StyledDialogTitle>

      {candidates && (
        <DialogContentWithMotion>
          {candidates.length === 0 ? (
            <Typography
              fontSize="16px"
              textAlign="center"
              marginTop="50px"
              marginBottom="30px"
            >
              Oops it seems there is nothing for {` ‘${debouncedKeyword}’`}
            </Typography>
          ) : (
            candidates.map((candidate) => (
              <CandidateRow
                anime={candidate}
                key={`candidate-${candidate.mal_id}`}
              />
            ))
          )}
        </DialogContentWithMotion>
      )}
    </StyledDialog>
  );
}

export default SearchDialog;
