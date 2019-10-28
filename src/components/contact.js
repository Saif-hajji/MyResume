import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import IMG_1014 from './IMG_1014.JPG';

class contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Saifeddine Hajji</h2>
            <img
              src={IMG_1014}
              alt=""
              style={{ height: '250px' }}
            />
            <p style={{ width: '50%', margin: 'auto', paddingTop: '2em' }}>Ambitious intern engineer with considerable technical skills and   excellent communication ability. . A well-rounded software engineer eager to expand my experiences and gain new knowledge.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact ME</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontFamily: 'anton', fontSize: '30px' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (216) 21 294 162
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontFamily: 'anton', fontSize: '30px' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    saifedine.hajji@gmail.com
                    </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontFamily: 'anton', fontSize: '30px' }}>
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                    Sifon
                    </ListItemContent>
                </ListItem>
              </List>

            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default contact;
