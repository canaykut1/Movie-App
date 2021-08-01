import React, { useEffect, useState } from "react";
import { MovieService } from "../../api/service";
import Category from "../../shared/Category/Category";

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
    <div className="main-component">
      {popularMovies?.length > 0 && <Category movies={popularMovies} header="Popular Movies" />}
      {popularSeries?.length > 0 && <Category movies={popularSeries} header="Popular Series" />}
      {documentries?.length > 0 && <Category movies={documentries} header="Documentries" />}
      {familyMovies?.length > 0 && <Category movies={familyMovies} header="Family Movies" />}
    </div>
  );
};

export default Main;
