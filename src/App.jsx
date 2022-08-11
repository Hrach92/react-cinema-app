import { useEffect } from 'react';
import { connect } from 'react-redux';
import { api_key, instance } from './instance';
import { setGenreList, setPopularList } from './reducers/HomeReducer'
import app from './App.module.css'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import GenreElemenet from './Components/GenreElement';
import Element from './Components/Element';
import SearchResult from './Components/SearchResult';
import Header from './Components/homePage/Header';
import HomePage from './Components/HomePage'

function App(props) {
  return <div className={app.home}>
    <div><Header/></div>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/:name' element={<GenreElemenet genreId={props.homePage.genreId}/>}/>
      <Route path='movie/:title' element={<Element movie={props.homePage.movie}/>}/>
      <Route path='search/movie' element={<SearchResult/>}/>
    </Routes>
  </div>
}
let mapStateToProps = (state) =>{
  return {
    homePage:state.homePage
  }
}

export default connect(mapStateToProps,{})(App)
