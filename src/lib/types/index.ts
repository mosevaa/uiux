interface ITorrent {
  audio_channels: string;
  bit_depth: string;
  date_uploaded: string;
  date_uploaded_unix: number;
  hash: string;
  is_repack: string;
  peers: number;
  quality: string;
  seeds: number;
  size: string;
  size_bytes: number;
  type: string;
  url: string;
  video_codec: string;
}

interface FilmStyles {
  background_image: string;
  background_image_original: string;
  large_cover_image: string;
  medium_cover_image: string;
  small_cover_image: string;
}

interface FilmMeta {
  url: string;
  language: string;
  imdb_code: string;
  date_uploaded: string;
  date_uploaded_unix: number;

}

export interface IFilm extends FilmStyles, FilmMeta {
  description_full: string;
  genres: string[];
  id: number;
  mpa_rating: string;
  rating: number;
  runtime: number;
  slug: string;
  state: string;
  summary: string;
  synopsis: string;
  title: string;
  title_english: string;
  title_long: string;
  torrents: ITorrent[];
  year: number;
  yt_trailer_code: string;
}

export interface IFilmList {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: IFilm[];
}

interface IDataFilm {
  movie: IFilm
}

export interface IResponse {
  status: string
  status_message: string
  data: IDataFilm | IFilmList
}