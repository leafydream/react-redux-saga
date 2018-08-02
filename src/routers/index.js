import React from 'react';
import Loadable from 'react-loadable';
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Nav from '@/containers/Nav';
import Home from '@/containers/Home';
import Loading from '@/components/Loading';


const routes = [
	{ 
        path: '/',
        exact: true,
        name: 'home',
        component: Home,
	},
	{ 
        path: '/counter',
        exact: false,
        name: 'counter',
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'counter' */ '@/containers/Counter'),
            loading: Loading
        })
    },
    {
        path: '/author',
        exact: false,
        name: 'author',
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'author' */ '@/containers/Author'),
            loading: Loading,
        }) 
    },
    {
        path: '/test',
        exact: false,
        name: 'test',
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'author' */ '@/containers/Test'),
            loading: Loading,
        }) 
    }
];
const Router = process.env.NODE_ENV == 'production' ? BrowserRouter : HashRouter;
const RouterMap = ({ history }) => (
    <HashRouter hisroty={history} basename="/">
        <div>
            <Nav />
            <Switch>
                {
                    routes.map(route => (
                        <Route
                            key={route.name}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))
                }
                <Redirect from='' to="/" />
            </Switch>
        </div>
    </HashRouter>
)

export default RouterMap;