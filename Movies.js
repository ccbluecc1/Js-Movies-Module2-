//65130500094 Chanapol Puntuvadee

class Movies {
  constructor() {
    this.movies = []
  }
  getAllMovies() {
    return this.movies
  }
  addMovie(title, director, year, genre) {
    if (!title || !director || !year || !genre) {
      return undefined
    }
    const moviesame = this.movies.find(
      (movie) =>
        movie.title.toLowerCase() === title.toLowerCase() &&
        movie.director.toLowerCase() === director.toLowerCase()
    )
    if (moviesame) {
      return undefined
    }
    const newMovie = {
      title,
      director,
      year,
      genre
    }

    this.movies.push(newMovie)
    return newMovie
  }
  updateMovie(title, updatedDetails) {
    const movieToupdate = this.movies.find(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    )
    if (!movieToupdate) {
      return undefined
    }
    if (updatedDetails.director) {
      movieToupdate.director = updatedDetails.director
    }
    if (updatedDetails.year) {
      movieToupdate.year = updatedDetails.year
    }
    if (updatedDetails.genre) {
      movieToupdate.genre = updatedDetails.genre
    }
    return movieToupdate
  }

  deleteMovieByTitle(title) {
    const index = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    )
    if (index === -1) {
      return 'no movie has been deleted'
    } else {
      const deletemovie = this.movies.splice(index, 1)[0]
      return deletemovie
    }
  }
}
module.exports = Movies
