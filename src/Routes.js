import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './component/core/Home'
import Signin from './component/user/SignIn'
import Signup from './component/user/SignUp'




const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;