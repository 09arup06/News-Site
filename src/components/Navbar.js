import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const Navbar=(props)=>{
    return (
      <nav className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/home">Ebar Khobor</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
            </li>
          
            <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
            
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">Technology</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"></input>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {`${props.mode === 'light' ? 'dark' : 'light'}`} mode</label>
          </div>
        </div>
      </nav>
    )
  }
  Navbar.defaultProps={
    mode:'light',
}
Navbar.propTypes={
    mode:PropTypes.string,
}
export default Navbar
