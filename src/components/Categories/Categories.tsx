import { GENRE_IDS } from "../../constants/genre_ids";
import { IGenre_Ids } from "../../models/Genre_Ids";
import "./Categories.scss";

export default function Categories({ genre_ids }: any) {
  return (
    <div className="film-categories">
      {GENRE_IDS.map((item: IGenre_Ids) => {
        return genre_ids.includes(item.id) ? (
          <span key={item.id}>| {item.name} |</span>
        ) : (
          ""
        );
      })}
    </div>
  );
}
