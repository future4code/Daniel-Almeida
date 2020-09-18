import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Members from '../Screens/Members'
import Homepage from '../Screens/Homepage'
import Create from '../Screens/Create'
import Trip from '../Screens/Trip'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Router() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header/>
              <Homepage />
              <Footer />
            </Route>
            <Route exact path="/trip">
              <Header/>
              <Trip />
              <Footer />
              </Route>
            <Route exact path="/members">
              <Header/>
              <Members />
              <Footer />
            </Route>
            <Route exact path="/create">
              <Header/>
              <Create />
              <Footer />
            </Route>
            <Route>
              <Header/>
              <div> Erro (404)</div>
            </Route>
          </Switch>
      </BrowserRouter>
      </>
    )
}
