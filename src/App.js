import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import LogInForm from './components/LogInForm'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LogInForm} />
      </Switch>
    )
  }
}

export default App
