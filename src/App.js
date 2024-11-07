import {Route, Switch} from 'react-router-dom'
import IplHomePage from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={IplHomePage} />
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound}/>
  </Switch>
)

export default App