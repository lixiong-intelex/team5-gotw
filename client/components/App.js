// import React from 'react';
// import GeekList from './GeekList.js'
// import GeekDetail from './GeekDetail/GeekDetail.js'
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
// export default class App extends React.Component {
//   render() {
//     return (
//       <Router history={hashHistory}>
//         <Route path='/' component={GeekList} />
//         <Route path='/GeekDetail' component={GeekDetail} />
//       </Router>
//     );
//   }
// }


import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import GeekList from './GeekList.js'
import GeekDetail from './GeekDetail/GeekDetail.js'

class App extends React.Component {
  render() {
    return (
      <GeekList />
    )
  }
}
const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
export default App