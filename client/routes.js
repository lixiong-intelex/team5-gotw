import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GeekList from './components/GeekList';
import GeekDetail from './components/GeekDetail/GeekDetail';
import About from './components/About'

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={GeekList} />
                <Route exact path='/about' component={About} />
                <Route exact path='/geekdetail' component={GeekDetail} />
            </Switch>
        )
    }
}