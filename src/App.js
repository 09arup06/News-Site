import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {
  const [mode, setmode] = useState('light')
  const [progress, setProgress] = useState(0)
 
  const toggle=()=>{
    if(mode==='light'){
        setmode('dark')
      document.body.style.backgroundColor='#030408';     
    }
    else if(mode==='dark'){
        setmode('light')
      document.body.style.backgroundColor='white';
    }
  }
    return (
      <Router>
      <div>   
        <Navbar mode={mode} toggle={toggle} />
        <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
      /> </div>
        <Routes>
          <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={18} country="in" category="sports" mode={mode}/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={18} country="in" category="science" mode={mode} />}/>
          <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={18} country="in" category="technology" mode={mode} />}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={18} country="in" category="entertainment" mode={mode} />}/>
          <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={18} country="in" category="health" mode={mode} />}/>
          <Route exact path="/News-Site" element={<News setProgress={setProgress}  key="general" pageSize={18} country="in" category="general" mode={mode} />}/>
          <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={18} country="in" category="business" mode={mode} />}/>
          <Route exact path="/home" element={<News setProgress={setProgress}  key="general1" pageSize={18} country="in" category="general" mode={mode} />}/>
          <Route exact path="/" element={<News setProgress={setProgress}  key="general" pageSize={18} country="in" category="general" mode={mode}/>}/>
        </Routes>
        </div>
        </Router>
        
    )
  }
export default App

