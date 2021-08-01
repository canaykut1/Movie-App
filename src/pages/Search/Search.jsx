import React, { useState } from "react";
import { MovieService } from "../../api/service";
import Category from "../../shared/Category/Category";
import { TextField, Button, Snackbar, CircularProgress } from "@material-ui/core";
import "./Search.scss";

const Search = (props) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [input, setInput] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleSearch = (query) => {
    setSearchedMovies([]);
    setShowLoading(true);
    new MovieService()
      .getSearchedMovies(query)
      .then((res) => {
        setSearchedMovies(res);
        setShowLoading(false);
        if (res.length === 0) {
          setSnackbarMessage(`Sorry, could not find any movie for ${input}`);
          setSnackbarOpen(true);
        }
      })
      .catch((_) => {
        setShowLoading(false);
        setSnackbarMessage("Sorry, something went wrong!");
      });
  };

  return (
    <div className="search-component">
      <div className="search-bar">
        <TextField
          id="outlined-basic"
          label="Search for movies"
          variant="outlined"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button size="large" variant="contained" onClick={() => handleSearch(input)}>
          Search
        </Button>
      </div>
      {searchedMovies?.length > 0 && <Category movies={searchedMovies} header="Searched Movies" />}
      {showLoading && <CircularProgress />}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
};

export default Search;
