import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Members from '../Screens/Members'
import Homepage from '../Screens/Homepage'
import Trip from '../Screens/Trip'
import Header from '../Components/Header'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header/>
          <Homepage />
        </Route>
        <Route exact path="/trip">
        <Header/>
          <Trip />
        </Route>
        <Route exact path="/members">
        <Header/>
          <Members />
        </Route>
        <Route>
        <Header/>
          <div>Erro (404)</div>
        </Route>
      </Switch>
    </BrowserRouter>
        </div>
    )
}
