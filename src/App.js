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
  constructor(){
    super()
    this.state={
      mode:'light'          
   }
  }
 
  toggle=()=>{
    if(this.state.mode==='light'){
      this.setState({
        mode:'dark'})
        console.log(this.state.mode)
      document.body.style.backgroundColor='#030408';
        
    }
    else if(this.state.mode==='dark'){
      this.setState({
        mode:'light'});
        console.log(this.state.mode)
      document.body.style.backgroundColor='white';
    }

  }
  render() {
   
    return (
      <Router>
      <div>
        
        <Navbar mode={this.state.mode} toggle={this.toggle} />
        <Routes>
          <Route exact path="/sports" element={<News key="sports" pageSize={18} country="in" category="sports" mode={this.state.mode}/>}/>
          <Route exact path="/science" element={<News key="science" pageSize={18} country="in" category="science" mode={this.state.mode} />}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={18} country="in" category="technology" mode={this.state.mode} />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={18} country="in" category="entertainment" mode={this.state.mode} />}/>
          <Route exact path="/health" element={<News key="health" pageSize={18} country="in" category="health" mode={this.state.mode} />}/>
          <Route exact path="/News-Site" element={<News key="general" pageSize={18} country="in" category="general" mode={this.state.mode} />}/>
          <Route exact path="/business" element={<News key="business" pageSize={18} country="in" category="business" mode={this.state.mode} />}/>
          <Route exact path="/home" element={<News key="general1" pageSize={18} country="in" category="general" mode={this.state.mode} />}/>
          <Route exact path="/" element={<News key="general" pageSize={18} country="in" category=" general" mode={this.state.mode}/>}/>
        </Routes>
        </div>
        </Router>
        
    )
  }
}

