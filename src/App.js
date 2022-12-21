
import './App.css';

import React, { Component } from 'react'
import NavBar from './componets/NavBar';
import News from './componets/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
   let pageSize= 6;
   let country="in";
    return (
      <>
      <Router>
     <NavBar/>
      <Routes>
     <Route exact path='/' element={<News key="science" pageSize={pageSize} country={country} category={"general"}/>}/>
     <Route exact path='/business' element={<News key="business" pageSize={pageSize} country={country} category={"business"}/>}/>
     <Route exact path='/entertainment' element={<News key="entertainment" pageSize={pageSize} country={country} category={"entertainment"}/>}/>
     <Route exact path='/general' element={<News key="general" pageSize={pageSize} country={country} category={"general"}/>}/>
     <Route exact path='/health' element={<News key="health" pageSize={pageSize} country={country} category={"health"}/>}/>
     <Route exact path='/science' element={<News key="science" pageSize={pageSize} country={country} category={"science"}/>}/>
     <Route exact path='/sports' element={<News key="sports" pageSize={pageSize} country={country} category={"sports"}/>}/>
     <Route exact path='/technology' element={<News key="technology" pageSize={pageSize} country={country} category={"technology"}/>}/>
     </Routes>
     </Router>
     </>
    )
  }
}



