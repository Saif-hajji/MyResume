import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import IMG_1014 from './IMG_1014.JPG'


class Home extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="homeGrid">
          <Cell col={12} >
            <img className="avatar-img" alt="avatar" src={IMG_1014} />
            <hr />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr />
              <p>HTML/CSS | BootStrap | JavaScript | React | React Native</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/hajji-saifeddine-a27403158/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a href="https://github.com/Saif-hajji" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                <a href="https://facebook.com/SiiiFon" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>

                <a href="https://github.com/Saif-hajji" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                <a href="https://github.com/Saif-hajji" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a >

              </div>
            </div >


          </Cell >
        </Grid >
      </div >
    );
  }
}

export default Home;
