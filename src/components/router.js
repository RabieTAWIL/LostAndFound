import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import FoundedItems from "./FoundedItems";
import LostedItems from "./LostedItems";
import ButtonAppBar from "./header";
import FooterPage from "./Footer";
import Rewards from "./rewards";

const Router = () => (
  <BrowserRouter>
    <ButtonAppBar />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/found" component={FoundedItems} />
      <Route path="/lost" component={LostedItems} />
      <Route path="/rewards" component={Rewards} />
    </Switch>
    <FooterPage />
  </BrowserRouter>
);

export default Router;
