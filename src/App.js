import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Todo from './pages/Todo'

import './styles/app.scss'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/todo" component={Todo} />
                <Redirect from="/" to="/todo" />
            </Switch>
        </Router>
    )
}

export default App
