const API_KEY = "140961949e53a0c5c0184345f543b12e";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`, //한국어로 되있는 트렌딩 영화목록
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, //네트워크에서 티비 목록을 가져오기
    fetchToprated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetcthActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
