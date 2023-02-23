import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
        <Navbar/>
        <News key="sports" pageSize={18} country="in" category="sports"/>
        <Routes>
          <Route exactpath="/sports" element={<News key="sports" pageSize={18} country="in" category="sports"/>}/>
          <Route exact path="/science" element={<News key="science" pageSize={18} country="in" category="science" />}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={18} country="in" category="technology" />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={18} country="in" category="entertainment" />}/>
          <Route exact path="/health" element={<News key="health" pageSize={18} country="in" category="health" />}/>
          <Route exact path="/News-Site" element={<News key="general" pageSize={18} country="in" category="general" />}/>
          <Route exact path="/business" element={<News key="business" pageSize={18} country="in" category="business" />}/>
          <Route exact path="/home" element={<News key="general" pageSize={18} country="in" category="general" />}/>
          <Route exact path="https://09arup06.github.io/News-Site/"element={<News key="general" pageSize={18} country="in" category="general" />}/>
          
        </Routes>
        </div>
        </Router>
        
    )
  }
}

