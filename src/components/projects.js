import React, { Component } from "react";
import { Tabs, Tab } from 'react-mdl';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shaddow={10} style={{ height: '350px', width: '300px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', heght: '200px', background: 'url(https://booklovinmamas.com/wp-content/uploads/2017/06/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center/cover' }}>E-Shop</CardTitle>
            <CardText>This was my first React project,therefore it was simple but very helpful for me to learn the basics</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>CodeS</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shaddow={10} style={{ height: '350px', width: '300px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', heght: '200px', background: 'url(https://booklovinmamas.com/wp-content/uploads/2017/06/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center/cover' }}>E-Shop</CardTitle>
            <CardText>This was my first React project,therefore it was simple but very helpful for me to learn the basics</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>CodeS</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shaddow={10} style={{ height: '350px', width: '300px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', heght: '200px', background: 'url(https://booklovinmamas.com/wp-content/uploads/2017/06/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center/cover' }}>E-Shop</CardTitle>
            <CardText>This was my first React project,therefore it was simple but very helpful for me to learn the basics</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>CodeS</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shaddow={10} style={{ height: '350px', width: '300px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', heght: '200px', background: 'url(https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-1280x720.jpg) center/cover' }}>E-Shop</CardTitle>
            <CardText>This was my first React project,therefore it was simple but very helpful for me to learn the basics</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>CodeS</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shaddow={10} style={{ height: '350px', width: '300px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', heght: '200px', background: 'url(https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-1280x720.jpg) center/cover' }}>E-Shop</CardTitle>
            <CardText>This was my first React project,therefore it was simple but very helpful for me to learn the basics</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>CodeS</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shaddow={10} style={{ height: '350px', width: '300px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', heght: '200px', background: 'url(https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-1280x720.jpg) center/cover' }}>E-Shop</CardTitle>
            <CardText>This was my first React project,therefore it was simple but very helpful for me to learn the basics</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>CodeS</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shaddow={10} style={{ height: '350px', width: '300px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', heght: '200px', background: 'url(https://lilly021.com/wp-content/uploads/2019/07/010-000-Symfony@2X-1-1024x512.jpg) center/cover' }}>E-Shop</CardTitle>
            <CardText>This was my first React project,therefore it was simple but very helpful for me to learn the basics</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>CodeS</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shaddow={10} style={{ height: '350px', width: '300px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', heght: '200px', background: 'url(https://lilly021.com/wp-content/uploads/2019/07/010-000-Symfony@2X-1-1024x512.jpg) center/cover' }}>E-Shop</CardTitle>
            <CardText>This was my first React project,therefore it was simple but very helpful for me to learn the basics</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>CodeS</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shaddow={10} style={{ height: '350px', width: '300px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', heght: '200px', background: 'url(https://lilly021.com/wp-content/uploads/2019/07/010-000-Symfony@2X-1-1024x512.jpg) center/cover' }}>E-Shop</CardTitle>
            <CardText>This was my first React project,therefore it was simple but very helpful for me to learn the basics</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>CodeS</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Card shaddow={10} style={{ height: '350px', width: '300px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', heght: '200px', background: 'url(https://www.mindinventory.com/blog/wp-content/uploads/2018/10/angular7.png) center/cover' }}>E-Shop</CardTitle>
            <CardText>This was my first React project,therefore it was simple but very helpful for me to learn the basics</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>CodeS</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shaddow={10} style={{ height: '350px', width: '300px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', heght: '200px', background: 'url(https://www.mindinventory.com/blog/wp-content/uploads/2018/10/angular7.png) center/cover' }}>E-Shop</CardTitle>
            <CardText>This was my first React project,therefore it was simple but very helpful for me to learn the basics</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>CodeS</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shaddow={10} style={{ height: '350px', width: '300px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', heght: '200px', background: 'url(https://www.mindinventory.com/blog/wp-content/uploads/2018/10/angular7.png) center/cover' }}>E-Shop</CardTitle>
            <CardText>This was my first React project,therefore it was simple but very helpful for me to learn the basics</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>CodeS</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    }

  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Java</Tab>
          <Tab>Symfony</Tab>
          <Tab>Angular</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    );
  }
}

export default Projects;
