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

export interface IFilm {
  background_image: string;
  background_image_original: string;
  date_uploaded: string;
  date_uploaded_unix: number;
  description_full: string;
  genres: string[];
  id: number;
  imdb_code: string;
  language: string;
  large_cover_image: string;
  medium_cover_image: string;
  mpa_rating: string;
  rating: number;
  runtime: number;
  slug: string;
  small_cover_image: string;
  state: string;
  summary: string;
  synopsis: string;
  title: string;
  title_english: string;
  title_long: string;
  torrents: ITorrent;
  url: string;
  year: number;
  yt_trailer_code: string;
}

export interface IFilmList {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: IFilm[];
}
