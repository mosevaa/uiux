interface ITorrent {
    url: string
    hash: string
    quality: string
    type: string
    is_repack: string
    video_codec: string
    bit_depth: string
    audio_channels: string
    seeds: string
    peers: string
    size: string
    size_bytes: number
    date_uploaded: string
    date_uploaded_unix: number
}

export interface IFilm {
    id: number
    url: string
    imbd_code: string
    title: string
    title_english: string
    title_long: string
    slug: string
    year: number
    rating: number
    runtime: number
    genres: string[]
    summary: string
    description_full: string
    synopsis: string
    yt_trailer_code: string
    language: string
    mpa_rating: string
    background_image: string
    background_image_original: string
    small_cover_image: string
    medium_cover_image: string
    large_cover_image: string
    download_count: number
    like_count: number
}

export interface IFilmList {
    movie_count: number
    limit: number
    page_number: number
    movie: IFilm[]
}