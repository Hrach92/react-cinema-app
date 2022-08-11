import React, { useEffect, useState } from "react";
import {setSearchText,setResult} from '../../reducers/SearchReducer'
import { connect } from 'react-redux';
import { api_key, instance } from "../../instance";
import { Link } from "react-router-dom";
import {BiSearchAlt2} from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux/es/exports";
import header from './Header.module.css'

function Search(props){
    const [text,setText] = useState('')
    let dispatch = useDispatch()
    let state = useSelector(state=>state.search)
    return <form>
        <input type={'text'} style={{borderRadius:'5px',border:'0'}} value={text} onChange={(e)=>{
            return setText(e.target.value)}}/>
        <Link to='/search/movie'><span className={header.btn} onClick={()=>{
            return dispatch(setSearchText(text)),setText('')}}><BiSearchAlt2/></span></Link>
    </form>
}

export default Search