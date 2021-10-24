import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import CreatePage from '../pages/create'
import EditPage from '../pages/edit'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create" component={CreatePage} />
                <Route path="/edit/:id" component={EditPage}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation
