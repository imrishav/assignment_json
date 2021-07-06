import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { PostList, Post, User, NavBar } from "../components";

const Routes = () => {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path="/" component={PostList} exact />
        <Route path="/user/:id" component={User} exact />
        <Route path="/post/:id" component={Post} exact />
      </Switch>
    </Fragment>
  );
};

const RoutesHOC = withRouter(Routes);

export default RoutesHOC;
