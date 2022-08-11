const GENRES = 'GENRES'
const POPULAR = 'POPULAR'
const MOVIE = 'MOVIE'
const GENREID = 'GENREID'
const PAGE = 'PAGE'
const GUEST_ID='GUEST_ID'

let initialState = {
    genres: [],
    genreId: '',
    popularMovies: [],
    movie: {},
    page:1,
    guest_id:''
}

let HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GUEST_ID:
            return {
                ...state,
                guest_id:action.id
            }
        case GENRES:
            return {
                ...state,
                genres: [...action.genres]
            }
        case POPULAR:
            return {
                ...state,
                popularMovies: [...action.popular]
            }
        case GENREID: {
            return {
                ...state,
                genreId: action.id
            }
        }
        case MOVIE:
            return {
                ...state,
                movie: { ...action.movie }
            }
        case PAGE:
            return {
                ...state,
                page:action.page
            }
        default:
            return state
    }
}
export default HomeReducer

export let setGenreList = (genres) => {
    return { type: GENRES, genres }
}
export let setPopularList = (popular) => {
    return { type: POPULAR, popular }
}
export let setMovie = (movie) => {
    return { type: MOVIE, movie }
}
export let setGenreId = (id) => {
    return { type: GENREID, id }
}
export let setPage = (page) => {
    return {type:PAGE,page}
}
export let getId = (id) =>{
    return {type:GUEST_ID,id}
}