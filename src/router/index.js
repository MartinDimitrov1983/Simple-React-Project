import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import CreatePage from '../pages/create'
import EditPage from '../pages/edit'
const ROUTES = [
    {
        route: '/',
        component: Home,
    },
    {
        route: '/create',
        component: CreatePage,
    },
    {
        route: '/edit/:id',
        component: EditPage,
    },
]
const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                {ROUTES.map((route, index) => (
                    <Route
                        key={`key-${index}`}
                        path={route.route}
                        exact
                        component={route.component}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation
