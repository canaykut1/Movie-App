import axios from "axios";

const endpoint = process.env.REACT_APP_SERVICE_URI;
const key = process.env.REACT_APP_API_KEY;

export class MovieService {
  getPopularMovies() {
    return axios
      .get(`${endpoint}/movie/popular?api_key=${key}`)
      .then((response) => {
        return response.data.results;
      })
      .catch((err) => {
        console.error(err.message);
        throw err;
      });
  }
  getPopularSeries() {
    return axios
      .get(`${endpoint}/tv/popular?api_key=${key}`)
      .then((response) => {
        return response.data.results;
      })
      .catch((err) => {
        console.error(err.message);
        throw err;
      });
  }
  getDocumentries() {
    return axios
      .get(`${endpoint}/discover/movie?api_key=${key}&page=1&with_genres=99&vote_count.gte=500`)
      .then((response) => {
        return response.data.results;
      })
      .catch((err) => {
        console.error(err.message);
        throw err;
      });
  }
  getFamilyMovies() {
    return axios
    .get(`${endpoint}/discover/movie?api_key=${key}&page=1&with_genres=10751&vote_count.gte=500`)
    .then((response) => {
      return response.data.results;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
  }
  getSearchedMovies(query) {
    return axios
    .get(`${endpoint}/search/movie?api_key=${key}&query=${query}`)
    .then((response) => {
      return response.data.results;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
  }
}
