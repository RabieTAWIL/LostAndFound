import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import Rewards from './rewards';
import Test from './test/test';



const Router = () =>(
<BrowserRouter>
<Switch>
<Route path="/" component={App} exact />
<Route path="/rewards"  component={Rewards}  />

<Route path="/test"  component={Test}  />

</Switch>
</BrowserRouter>

)

export default Router;
