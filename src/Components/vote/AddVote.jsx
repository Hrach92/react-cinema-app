import React, { useEffect } from "react";
import { api_key } from "../../instance";
import { useSelector } from "react-redux/es/hooks/useSelector"; 

function Vote(props){
    let guest_session_id = useSelector(state=>state.homePage.guest_id)
    useEffect(()=>{

      fetch(`https://api.themoviedb.org/3/movie/${props.id}/rating?${api_key}&guest_session_id=${guest_session_id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body:JSON.stringify({
            'value':8.5
        })
      }).then(res=>{
        return res.json()}).then(res=>console.log(res))
    })
    return <div>Delete</div>
}
export default Vote