import { IFilm } from "./Film";

export interface IFilms {
  filmsData: IFilm[];
  favourites: IFilm[];
  handleLike: Function;
  handleUnlike: Function;
  favouritesPage?: boolean;
}
