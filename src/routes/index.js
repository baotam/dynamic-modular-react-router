import React from "react";
import isEmpty from "lodash/isEmpty";
import { Switch, Route } from "react-router-dom";
import ProjectForm from "../modules/core/forms/new-project-form";
import NewPostForm from "../modules/core/forms/new-post-form";
import ProjectLoop from "../modules/core/loops/project-loop";
import Home from "../home";

const Routes = ({ importedModules }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projectlist/:filter" component={ProjectLoop} />
    <Route exact path="/newproject/:type/:id" component={ProjectForm} />
    <Route exact path="/newpost/:type" component={NewPostForm} />
    {!isEmpty(importedModules) &&
      importedModules.map(({ path, Component }) => (
        <Route key={path} exact path={`/${path}`} component={Component} />
      ))}
  </Switch>
);

export default Routes;
