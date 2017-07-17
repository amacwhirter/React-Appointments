import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../Components/Main";

const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Main} />
        </Route>
    </Router>
);

export default Routes;
