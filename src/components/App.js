import React, { Component } from 'react'
import Main from './Main'
import Repay from './Repay'

import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/repay" component={Repay} />
        </Switch>
      </div>
    )
  }
}

export default App
