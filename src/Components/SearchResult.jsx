import React, { useEffect, useState } from "react";
import { setSearchText, setResult } from '../reducers/SearchReducer'
import { connect } from 'react-redux';
import { api_key, img, instance } from "../instance";
import searchResult from './Component.module.css'
import { Link } from "react-router-dom";
import { setMovie } from "../reducers/HomeReducer";

function SearchResult(props) {
    useEffect(() => {
        instance.get(`search/movie?${api_key}&language=en-US&query='${props.search.text}'`).then(response => {
            return props.setResult(response.data.results)
        })
    }, [props.search.text])
    return <div className={searchResult.container}>
        {props.search.result.map((movie) => {
            return <div key={movie.id} className={searchResult.cell}>
                <Link to={`/movie/${movie.title}`} onClick={() => props.setMovie(movie)}>
                    <div><img className={searchResult.img} src={`${img}${movie.poster_path}`} /></div>
                    <div className={searchResult.title}>{movie.title}</div>
                </Link>
            </div>
        })
        }
    </div>
}

let mapStateToProps = (state) => {
    return {
        search: state.search
    }
}
export default connect(mapStateToProps, { setSearchText, setResult, setMovie })(SearchResult)