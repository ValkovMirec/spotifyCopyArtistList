import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Alert from "react-bootstrap/Alert";

import ArtistsPage from "./Pages/ArtistsPage";
import ArtistProfile from "./Pages/ArtistProfile";
import AlbumDetail from "./Pages/AlbumDetail";
import Layout from "./blocks/Layout";

export default function AppRouter({}) {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={ArtistsPage}></Route>

          <Route
            exact
            path="/artists/:artistId"
            component={ArtistProfile}
          ></Route>

          <Route
            exact
            path="/artists/:artistId/albums/:albumId"
            component={AlbumDetail}
          ></Route>

          <Route>
            <div className="not-found-404">
              <Alert variant="danger">
                404 not found <Alert.Link href="/">go to home page</Alert.Link>{" "}
              </Alert>
            </div>
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}
