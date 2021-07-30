import React, { useEffect, useState } from "react";
import { MovieService } from "../../api/service";
import MovieCard from "../../shared/MovieCard/MovieCard";

const Main = (props) => {
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [documentries, setDocumentries] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);

  useEffect(() => {
    const movieService = new MovieService();
    const popularMoviesPromise = movieService.getPopularMovies();
    const popularSeriesPromise = movieService.getPopularSeries();
    const documentriesPromise = movieService.getDocumentries();
    const familyMoviesPromise = movieService.getFamilyMovies();

    Promise.all([popularMoviesPromise, popularSeriesPromise, documentriesPromise, familyMoviesPromise])
      .then((res) => {
          console.log(res);
        setPopularMovies(res[0]);
        setPopularSeries(res[1]);
        setDocumentries(res[2]);
        setFamilyMovies(res[3]);
        setIsApiCalled(true);
      })
      .catch((_) => {
        setIsApiCalled(true);
        //TODO ADD SNACK BAR
      });
  }, []);


  return (
    <div className="name-component">
     {familyMovies?.length > 0 && <MovieCard posterPath={familyMovies[0]?.poster_path} title={familyMovies[0]?.title} />}
    </div>
  );
};

export default Main;
