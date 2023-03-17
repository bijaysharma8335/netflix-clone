import { API_KEY } from "./config/Config";

const requests = {
    // requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    // requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    // requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
    // requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,
    // requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-UK`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-UK&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-UK&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-UK&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-UK&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-UK&with_genres=99`,
    fetchVideos: `videos?api_key=${API_KEY}`,
    fetchDetails: `?api_key=${API_KEY}&append_to_response=videos,recommendations,credits&language=en-US`,
};
export default requests;
// QLb7Ka!G44s!@4qs
// password tmdb
