import React from 'react'
import { Switch, Route} from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import SingUpPage from '../screens/SingUpPage/SingUpPage'
import Feeds from '../screens/Feeds/Feeds'
import Posts from '../screens/Posts/Posts'
import Errors from '../screens/Errors/Errors'

export const Router = () => {
    return (
        
        <Switch>
            <Route exact path={'/login'} >
                <LoginPage/>
            </Route>
            <Route exact path={'/singup'} >
                <SingUpPage/>
            </Route>
            <Route exact path={['/feeds', '/']} >
                <Feeds/>
            </Route>
            <Route exact path={'/posts'} >
                <Posts/>
            </Route>
            <Route exact path={'/erros'}>
                <Errors/>
            </Route>
        </Switch>
    
    )
}