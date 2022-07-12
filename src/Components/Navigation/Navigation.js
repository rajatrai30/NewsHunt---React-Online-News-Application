import React from 'react';
import {
  Link
} from "react-router-dom";

const Navigation = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{
        backgroundColor: "#3e96e3 !important",
        'boxShadow': '0 2px 8px 0 rgb(0 0 0)'
      }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsHunt</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: 'white !important' }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link> </li>
              <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link> </li>
              <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link> </li>
              <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link> </li>
              <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link> </li>
              <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link> </li>
            </ul>

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            {/* eslint-disable-next-line */}
            <input className="form-check-input" onClick={props.handleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label light" htmlFor="flexSwitchCheckDefault"><b>Enable Dark Mode</b></label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navigation