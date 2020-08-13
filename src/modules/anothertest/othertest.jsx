
import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";

const TestPluginDeux = ({ match }) => (
    <div className='home'>
      <h1>I'm the test plugin Number 2</h1>
      <NavLink exact to={`${match.url}/hi`}>
        Hello World
      </NavLink>
      <Switch>
        <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {" "}
            <h3> {match.params.name} </h3>
          </div>
        )}
      />
      </Switch>
    </div>
  );

  export default TestPluginDeux;