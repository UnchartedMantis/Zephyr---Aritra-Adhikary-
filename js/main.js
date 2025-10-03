document.addEventListener('DOMContentLoaded', () => {
    const moviesGrid = document.querySelector('.movie-grid');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Replace with your actual TMDB API key
    const apiKey = '522216afbbda5b6c39ce75f49c2e23f3';
    const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    const fetchMovies = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            displayMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const displayMovies = (movies) => {
        moviesGrid.innerHTML = '';
        movies.forEach(movie => {
            const movieCard = `
                <div class="movie-card">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <button onclick="addToWatchlist('${movie.id}', '${movie.title}', '${movie.poster_path}')">Add to Watchlist</button>
                </div>
            `;
            moviesGrid.innerHTML += movieCard;
        });
    };

    window.addToWatchlist = (id, title, poster_path) => {
        let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        if (!watchlist.some(movie => movie.id === id)) {
            watchlist.push({ id, title, poster_path });
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
            alert(`${title} has been added to your watchlist.`);
        } else {
            alert(`${title} is already in your watchlist.`);
        }
    };

    const searchMovies = async () => {
        const query = searchInput.value;
        if (query) {
            const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
            await fetchMovies(searchUrl);
        }
    };

    if (searchButton) {
        searchButton.addEventListener('click', searchMovies);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchMovies();
            }
        });
    }

    if (window.location.pathname.includes('index.html')) {
        fetchMovies(popularMoviesUrl);
    }

    if (window.location.pathname.includes('watchlist.html')) {
        const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        if (moviesGrid) {
            moviesGrid.innerHTML = '';
            watchlist.forEach(movie => {
                const movieCard = `
                    <div class="movie-card">
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                        <h3>${movie.title}</h3>
                        <button class="remove-button" onclick="removeFromWatchlist('${movie.id}')">Remove</button>
                    </div>
                `;
                moviesGrid.innerHTML += movieCard;
            });
        }
    }

    window.removeFromWatchlist = (id) => {
        let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        watchlist = watchlist.filter(movie => movie.id !== id);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        location.reload();
    };
});