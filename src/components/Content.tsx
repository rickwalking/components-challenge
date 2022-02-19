import { MovieProps } from "../interfaces/movie";
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  selectedGenreTitle: string;
  movies: MovieProps[];
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
    <Header selectedGenreTitle={props.selectedGenreTitle} />
    <main>
      <div className="movies-list">
        {props.movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}