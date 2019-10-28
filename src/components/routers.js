import React from "react";
import { Switch, Route } from "react-router-dom";
import home from "./home";
import projects from "./projects";
import resume from "./resume";
import aboutMe from "./aboutMe";
import contact from "./contact";

const Main = () => (
    <Switch>
        <Route exact path="/" component={home} />
        <Route path="/projects" component={projects} />
        <Route path="/resume" component={resume} />
        <Route path="/aboutme" component={aboutMe} />
        <Route path="/contact" component={contact} />
    </Switch>
)

export default Main;