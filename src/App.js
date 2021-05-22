
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login.js'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Dashboard from './Dashboard';

 
function App() {

  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
