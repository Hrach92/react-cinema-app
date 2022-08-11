import React from "react";
import { useParams } from "react-router-dom";
import { api_key, img, instance, starsCount } from "../instance";
import {MdStar,MdStarHalf ,MdStarBorder} from 'react-icons/md'
import cell from './Component.module.css'
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import Vote from "./vote/DeleteVote";

function Element({ movie }) {
    const { title } = useParams()
    const { vote_count, vote_average, overview, id ,poster_path ,genre_ids} = movie
    let guest_session_id = useSelector(state=>state.homePage.guest_id)
    const [vote,setVote] = useState('')
    useEffect(()=>{

      fetch(`https://api.themoviedb.org/3/movie/${id}/rating?${api_key}&guest_session_id=${guest_session_id}`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body:JSON.stringify({
            'value':8.5
        })
      }).then(res=>{
        return res.json()}).then(res=>console.log(res))
    })
    return <div className={cell.cellContainer}>
        <img src={`${img}${poster_path}`}/>{title}
        <div className={cell.vote}>{starsCount.map((star,i,arr)=>{
            if(vote_average>=star) return <MdStar onClick={()=>setVote(star)}/>
            else if(star-vote_average>=1)return <MdStarBorder onClick={()=>setVote(star)}/>
            return <MdStarHalf onClick={()=>setVote(star)}/>
        })}{vote_average}/{vote_count} {vote?`Your vote is ${vote}`:null} {vote?<button onClick={()=>{setVote('')}}><Vote id={id}/></button>:null}</div>
    </div>
}
export default Element