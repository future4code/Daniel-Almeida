import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Members from '../Screens/Members'
import Homepage from '../Screens/Homepage'
import Trip from '../Screens/Trip'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/trip">
          <Trip />
        </Route>
        <Route exact path="/members">
          <Members />
        </Route>
        <Route>
          <div>Erro (404)</div>
        </Route>
      </Switch>
    </BrowserRouter>
        </div>
    )
}
