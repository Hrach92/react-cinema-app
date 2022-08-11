import axios from "axios";

export  let instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})
export let api_key = 'api_key=c1fe0a5e08d1bf80be453d4b47b27699'
export let img='https://image.tmdb.org/t/p/w342'
export let arr=[1,2,3,4,5]
export let starsCount = [1,2,3,4,5,6,7,8,9,10]