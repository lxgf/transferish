import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../routes";
import {ERROR_PAGE_ROUTE, UPLOAD_PAGE_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const user = false;
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={ERROR_PAGE_ROUTE} />
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={ERROR_PAGE_ROUTE} />
            </Switch>
        )
};

export default AppRouter;
