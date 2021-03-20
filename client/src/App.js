import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Navbar, Nav, Button, FormControl, Form, Modal } from 'react-bootstrap';

import MyCards from './components/MyCards';
import LogCard from './components/LogCard';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/" >Common Card Collection</Navbar.Brand>
            <Nav.Link as={Link} to="/">My Cards</Nav.Link>
            <Nav.Link as={Link} to='/log'>Log Cards</Nav.Link>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={ MyCards } />
            <Route exact path='/log' component={ LogCard } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
