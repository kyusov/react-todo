import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Todo from './pages/Todo'
import Doing from './pages/Doing'
import Done from './pages/Done'

import './styles/app.scss'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/todo" component={Todo} />
                <Route path="/doing" component={Doing} />
                <Route path="/done" component={Done} />
                <Redirect from="/" to="/todo" />
            </Switch>
        </Router>
    )
}

export default App
