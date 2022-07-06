import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light" style={{
          backgroundColor: "#3e96e3 !important",
          'boxShadow': '0 2px 8px 0 rgb(0 0 0)',
          color: 'white !important'

        }}>
          <div className="container-fluid">
            <Link className="navbar-brand"to="/">NewsHunt</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: 'white !important' }}>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page"to="/">Home</Link>
                </li>
                <li className="nav-item"><Link className="nav-link active"to="/business">Business</Link> </li>
                <li className="nav-item"><Link className="nav-link active"to="/entertainment">Entertainment</Link> </li>
                {/* <li className="nav-item"><Link className="nav-link active"to="/general">General</Link> </li> */}
                <li className="nav-item"><Link className="nav-link active"to="/health">Health</Link> </li>
                <li className="nav-item"><Link className="nav-link active"to="/science">Science</Link> </li>
                <li className="nav-item"><Link className="nav-link active"to="/sports">Sports</Link> </li>
                <li className="nav-item"><Link className="nav-link active"to="/technology">Technology</Link> </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
