import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={props => (

        localStorage.getItem('user')?props.location.pathname==='/login'?<Redirect to={{ pathname: '/home'}} />:<Component {...props} />: props.location.pathname==='/login'?<Component {...props} />: <Redirect to={{ pathname: '/login', state: { from: props.location } }} />


    )} />
)