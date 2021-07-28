import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import SignupPage from './pages/SignupPage'
function App() {
  // const {data} = useGlobalContext();
  // console.log(data);
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
        <LoginPage />
        </Route>
        <Route  path='/signup'>
        <SignupPage />
        </Route>
        <Route path='/home'>
        <HomePage />
        </Route>
        <Route path='/about/'>
        <AboutPage />
        </Route>
        <Route path='*'>
        <h1>Error</h1>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
