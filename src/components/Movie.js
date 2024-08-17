import React, { useEffect, useState } from "react";

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // State to hold the specific movie
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=dd2c851604709ae2f1d37effd7d79805"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    // Filter the movie list based on the input value
    if (inputValue) {
      const movie = movieList.find((movie) =>
        movie.original_title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSelectedMovie(movie || null); // If no match is found, set to null
    } else {
      setSelectedMovie(null); // Clear selected movie if input is empty
    }
  }, [inputValue, movieList]);

  console.log(movieList);

  return (
    <div className="main-div">
      <input
        type="text"
        placeholder="Type a movie..."
        value={inputValue}
        onChange={handleInputChange}
        className="movie-name-input"
      />
      <p>Current input value: {inputValue}</p>

      {selectedMovie ? (
        <div key={selectedMovie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
            width="300px"
          />
          <p>{selectedMovie.original_title}</p>
        </div>
      ) : (
        <p>No movie found or type to search...</p> // Display message when no movie is found or input is empty
      )}
    </div>
  );
}

export default Movie;
