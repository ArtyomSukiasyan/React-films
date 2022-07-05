export interface IFilm {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  original_title: string;
  favourites: IFilm[];
  handleLike: Function;
  handleUnlike: Function;
  adult?: boolean;
  original_language?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
