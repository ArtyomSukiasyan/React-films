import { ReactElement } from "react";
import Image from "../Image/Image";
import Categories from "../Categories/Categories";
import { ReactComponent as FavouriteIcon } from "../../assets/favourite.svg";
import "./FilmCard.scss";

const isFavourite = (id: any, favourites: any) => {
  return favourites.some((el: any) => el.id === id);
};

export default function FilmCard({
  id,
  original_title,
  backdrop_path,
  genre_ids,
  favourites,
  handleLike,
  handleUnlike,
}: any): ReactElement {
  return (
    <div key={id} className="film-container">
      <Image backdrop_path={backdrop_path} original_title={original_title} />
      <h2>{original_title}</h2>
      <Categories genre_ids={genre_ids} />

      {!isFavourite(id, favourites) ? (
        <FavouriteIcon
          onClick={() => handleLike(id)}
          className="favourite-icon"
        />
      ) : (
        <FavouriteIcon
          onClick={() => handleUnlike(id)}
          className="unFavourite-icon"
        />
      )}
    </div>
  );
}
