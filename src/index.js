import React from 'react';
import ReactDOM from 'react-dom';
import "./Styles/main.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import ChampionsPage from "./Pages/ChampionsPage";
import ChampionInfo from "./Pages/ChampionInfo";
import NotFound from "./Layouts/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation />
      <Switch>
        <Route path="/" exact component={ChampionsPage}/>  
        <Route path="/champion/:id" exact component={ChampionInfo}/>
        {/* Any route with no match */}
        <Route path="*" component={NotFound}/>  
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
