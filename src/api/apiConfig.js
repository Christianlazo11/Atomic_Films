const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "f0804310b2aa799c42575717c6a0eae1",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
