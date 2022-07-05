import { ReactElement } from "react";
import { IFilm } from "../../models/Film";
import { IFilms } from "../../models/Films";
import FilmCard from "../FilmCard/FilmCard";
import "./Films.scss";

export default function Films({
  filmsData,
  favourites,
  handleLike,
  handleUnlike,
  favouritesPage = false,
}: IFilms): ReactElement {
  if (favouritesPage) {
    filmsData = favourites;
  }

  return (
    <div className="films-container">
      {filmsData.map((film: IFilm) => {
        return (
          <FilmCard
            key={film.id}
            handleLike={handleLike}
            handleUnlike={handleUnlike}
            favourites={favourites}
            id={film.id}
            original_title={film.original_title}
            backdrop_path={film.backdrop_path}
            genre_ids={film.genre_ids}
          />
        );
      })}
    </div>
  );
}
