import React from "react";
import Search from "./Search";
import {AiFillHome} from 'react-icons/ai'
import header from './Header.module.css'
import { Link } from "react-router-dom";

function Header(){
    return <div className={header.header}>
        <div className={header.home}><Link to='/'><AiFillHome/></Link></div>
        <div className={header.search}><Search/></div>
    </div>
}
export default Header