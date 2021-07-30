import axios from "axios";

const endpoint = process.env.REACT_APP_SERVICE_URI;
const key = process.env.REACT_APP_API_KEY;

export class ApiService {
  getPopularMovies () {
      return axios.get(`${endpoint}/movie/popular?api_key=${key}`).then(response => {
        return response.data.results;
      }).catch(err => {
        console.error(err.message)
        throw err
      })
    } 
  };
