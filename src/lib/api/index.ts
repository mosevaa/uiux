import axios from '../axios';

import { IFilm, IFilmList } from '../types';

export async function getFilmsList(page: string, pageSize: string) {
  return await axios.get<{ data: IFilmList }>(
    `/list_movies.json?limit=${pageSize}&page=${page}`
  );
}


export async function getFilmInfo(id: string) {
    return await axios.get<{ data: {movie: IFilm} }>(
      `/movie_details.json?movie_id=${id}`
    )
}
