import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GeekList from './components/GeekList.js';
import GeekDetail from './components/GeekDetail/GeekDetail.js';

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/' component={GeekList} />
                <Route exact path='/geekdetail' component={GeekDetail} />
            </Switch>
        )
    }
}