import { ReactComponent as FavouriteIcon } from "../../assets/favourite.svg";
import { IFilm } from "../../models/Film";
import "./FilmCard.scss";
import Image from "../Image/Image";
import Categories from "../Categories/Categories";

export default function FilmCard({
  id,
  original_title,
  backdrop_path,
  genre_ids,
}: IFilm) {
  return (
    <div key={id} className="film-container">
      <Image backdrop_path={backdrop_path} />
      <h2>{original_title}</h2>
      <Categories genre_ids={genre_ids} />
      <FavouriteIcon className="favourite-icon" />
    </div>
  );
}
