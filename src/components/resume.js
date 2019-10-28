import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import IMG_1014 from './IMG_1014.JPG';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }} >
              <img src={IMG_1014}
                alt=''
                style={{ height: '450px', width: '300x' }}
              />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Hajji Saifeddine</h2>
            <h4 style={{ color: 'grey' }}>Front-End Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>

          <Cell className='right-side' col={8} >
            right side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
