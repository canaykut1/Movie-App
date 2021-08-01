import React, { useState } from "react";
import { MovieService } from "../../api/service";
import Category from "../../shared/Category/Category";
import { TextField, Button } from "@material-ui/core";
import "./Search.scss";

const Search = (props) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [input, setInput] = useState("");
  const handleSearch = (query) => {
    new MovieService()
      .getSearchedMovies(query)
      .then((res) => {
        console.log(res);
        setSearchedMovies(res);
        setIsApiCalled(true);
        //IF SERCHED MOVIE COULD NOT FIND SHOW TO USER SNACKBAR
      })
      .catch((_) => {
        setIsApiCalled(true);
        //TODO ADD SNACK BAR
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
        <Button size="large" variant="contained" onClick={() => handleSearch(input) }>
          Search
        </Button>
      </div>

      {searchedMovies?.length > 0 && <Category movies={searchedMovies} header="Searched Movies" />}
    </div>
  );
};

export default Search;
