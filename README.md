# Zephyr 
Zephyr is a sleek movie library app that lets users discover, search and organize films effortlessly. It fetches real-time movie data, displays popular titles with posters and details and features a personalized list. Designed for cinephiles, Zephyr offers a clean, intuitive interface that makes exploring and managing movies simple and enjoyable.


# Movie Library

A simple web application to browse movies and manage a personal watchlist.

## Project Goal

The main goal of this project is to create a user-friendly interface for discovering movies and maintaining a personal watchlist. It utilizes the TMDB API to fetch movie data.

## Core Features

-   Browse a list of popular movies.
-   Search for movies by their title.
-   View movies displayed in a grid with their posters and titles.
-   Add movies to a personal watchlist.
-   View all movies added to the watchlist.
-   Remove movies from the watchlist.

## Tech Stack

-   HTML
-   CSS
-   JavaScript

## API Used

-   **The Movie Database (TMDB) API**: Used to fetch movie data, including popular movies and movie search results.

## Setup and Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/movie-library.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd movie-library
    ```
3.  **Get your TMDB API Key:**
    -   Go to [the TMDB website](https://www.themoviedb.org/) and create an account.
    -   Go to your account settings, and in the API section, request an API key.
4.  **Add your API Key:**
    -   Open the `js/main.js` file.
    -   Replace `'YOUR_TMDB_API_KEY'` with your actual TMDB API key.
5.  **Open `index.html` in your browser:**
    -   You can simply open the `index.html` file in your web browser to run the application.

## How to Run Test Cases

This project does not include a formal testing suite. To test the functionality:

1.  **Open the application** in your browser.
2.  **Verify popular movies load** on the main page.
3.  **Use the search bar** to search for a specific movie and verify the results.
4.  **Add a movie to your watchlist** by clicking the "Add to Watchlist" button.
5.  **Navigate to the "My Watchlist" page** to see the added movie.
6.  **Remove a movie from the watchlist** by clicking the "Remove" button and verify it is removed.

## Assumptions and Design Choices

-   **Client-Side Storage:** `localStorage` is used to persist the watchlist data on the client-side for simplicity. This means the watchlist is specific to the user's browser.
-   **No Backend:** This is a purely front-end application. All data is fetched directly from the TMDB API and managed in the browser.
-   **Styling:** Basic CSS is used for styling to keep the focus on the functionality.
-   **Error Handling:** Basic error handling is in place for API fetch requests, with errors logged to the console.
-   **Reusable Components:** While not a framework-based application, the concept of a reusable "MovieCard" is implemented through dynamic HTML generation in JavaScript.
-   **State Management:** State is managed implicitly through DOM manipulation and `localStorage`. For a larger application, a more robust state management solution would be considered.



