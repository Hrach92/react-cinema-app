import React from "react";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { api_key, arr, img, instance } from '../instance';
import {setGenreList,setPopularList,setMovie,setGenreId,setPage,getId} from '../reducers/HomeReducer'
import app from '../App.module.css'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import pages from './Component.module.css'

function HomePage(props){
    useEffect(()=>{
        instance.get(`genre/movie/list?${api_key}`).then(response=>{
          return props.setGenreList(response.data.genres)
        })
        instance.get(`movie/popular?${api_key}&page=${props.homePage.page}`).then(response=>{
          return props.setPopularList(response.data.results)
        })
        instance.get(`authentication/guest_session/new?${api_key}`).then(r=>props.getId(r.data.guest_session_id))
      },[props.genres,props.homePage.page])
      return <div className={app.home}>
        <div className={app.genres}>
          {props.homePage.genres.map(({id,name})=><Link onClick={()=>{
            return props.setGenreId(id),props.setPage(1)
            }} key={id} to={name} className={app.link}><div className={app.genreList}>{name}</div></Link>)}
        </div>
        <div className={app.popular}>
          {props.homePage.popularMovies.map((movie)=><Link onClick={()=>props.setMovie(movie)} key={movie.id} className={app.link} to={`movie/${movie.title}`}><div className={app.popularMovie} key={movie.id}><div><img className={app.image} src={`${img}${movie.poster_path}`}/></div><div className={app.title}>{movie.title}</div></div></Link>)}
          <div className={pages.pages}>{arr.map(item=>{
            return <div className={pages.page} style={item===props.homePage.page?{fontWeight:'bold'}:null} onClick={()=>props.setPage(item)}>{item}</div>
        })}</div>
        </div>
        </div>
}
let mapStateToProps = (state) =>{
    return {
      homePage:state.homePage
    }
  }
export default connect(mapStateToProps,{setPage,getId,setGenreList,setPopularList,setMovie,setGenreId})(HomePage);