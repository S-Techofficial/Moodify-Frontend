import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './component/auth/helper/PrivateRoutes'
import Category from './component/core/Category'
import Home from './component/core/Home'
import Playlist from './component/core/Playlist'
import Profile from './component/user/Profile'
import Signin from './component/user/SignIn'
import Signup from './component/user/SignUp'
import UserDashboard from './component/user/UserDashboard'






const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
                <Route path="/category/:categoryId" exact component={Category} />
                <Route path="/playlist/:playlistId" exact component={Playlist} />
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;