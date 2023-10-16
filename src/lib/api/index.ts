import axios from '../axios';
import { IFilm, IFilmList } from '../types';

export async function getFilmsList(page: string, pageSize: string) {
  return await axios.get<{ data: IFilmList }>(
    `list_movies.json?limit=${pageSize}&page=${page}`
  );
}

//
// export function getFilmInfo(id: string) {
//     return axios.get<IFilm>(`movie_details.json?movie_id=${id}`)
// }
