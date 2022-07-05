import { IImage } from "../../models/Image";
import "./Image.scss";

export default function Image({ backdrop_path, original_title }: IImage) {
  return (
    <img
      src={
        backdrop_path
          ? "https://image.tmdb.org/t/p/w500/" + backdrop_path
          : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
      }
      alt={original_title}
    />
  );
}
