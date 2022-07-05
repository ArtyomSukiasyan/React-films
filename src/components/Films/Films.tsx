import { useEffect, useState } from "react";
import { API_URL } from "../../constants/apiUrl";
import { IFilm } from "../../models/Film";
import FilmCard from "../FilmCard/FilmCard";
import "./Films.scss"

export default function Films() {
  const [filmsData, setFilmsData] = useState<IFilm[]>([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(API_URL);
      const movies = await response.json();
      const res: IFilm[] = movies.results;
      setFilmsData(res);
    }
    fetchApi();
  }, []);

  return (
    <div className="films-container">
      {filmsData.map((film: IFilm) => {
        return (
          <FilmCard
            key={film.id}
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
