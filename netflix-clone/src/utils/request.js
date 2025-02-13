const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
console.log(API_KEY);
const requests={
    fetchTrading: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
    fetchRomanticMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
    fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
    fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentaries: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,
    fetchTvShows: `tv/popular?api_key=${API_KEY}&language=en-US`
}
export default requests;