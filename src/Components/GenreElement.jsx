import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { api_key, arr, img, instance } from "../instance";
import genre from './Component.module.css'
import { setMovie ,setPage} from "../reducers/HomeReducer";

function GenreElemenet(props){
    let {name} = useParams()
    const [result,setResult] = useState([])
    useEffect(()=>{
        instance.get(`discover/movie?${api_key}&page=${props.homePage.page}&with_genres=${props.homePage.genreId}`).then(response=>{
            debugger
            return setResult(response.data.results)
        })
    })
    return <div className={genre.container}>
                {result.map((movie) => {
            return <div key={movie.id} className={genre.cell}>
                <Link style={{textDecoration:'none'}} to={`/movie/${movie.title}`} onClick={() => props.setMovie(movie)}>
                    <div><img className={genre.img} src={`${img}${movie.poster_path}`} /></div>
                    <div className={genre.title}>{movie.title}</div>
                </Link>
            </div>
        })
        }
        <div className={genre.pages}>{arr.map(item=>{
            return <div className={genre.page} style={item===props.homePage.page?{fontWeight:'bold'}:null} onClick={()=>props.setPage(item)}>{item}</div>
        })}</div>
    </div>
}
let mapStateToProps = (state) => {
    return {
        homePage: state.homePage
    }
}
export default connect(mapStateToProps,{setMovie,setPage})(GenreElemenet)