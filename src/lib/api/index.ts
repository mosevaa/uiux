import axios from "../axios";
import {IFilm, IFilmList} from "../types";

export function getFilmsList(page: string, pageSize: string) {
    return axios.get<IFilmList>(`list_movies.json?limit=${pageSize}&page=${page}`)
}

export function getFilmInfo(id: string) {
    return axios.get<IFilm>(`movie_details.json?movie_id=${id}`)
}