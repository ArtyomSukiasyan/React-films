import { ReactElement } from "react";
import Image from "../Image/Image";
import Categories from "../Categories/Categories";
import { IFilm } from "../../models/Film";
import { ReactComponent as FavouriteIcon } from "../../assets/favourite.svg";
import "./FilmCard.scss";

export default function FilmCard({
  id,
  original_title,
  backdrop_path,
  genre_ids,
}: IFilm): ReactElement {
  return (
    <div key={id} className="film-container">
      <Image backdrop_path={backdrop_path} original_title={original_title} />
      <h2>{original_title}</h2>
      <Categories genre_ids={genre_ids} />
      <FavouriteIcon className="favourite-icon" />
    </div>
  );
}
