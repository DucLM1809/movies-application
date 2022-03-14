const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '11b12b5c695f6c7e0a6ceaf6470de15c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig