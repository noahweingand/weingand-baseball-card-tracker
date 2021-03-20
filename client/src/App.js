import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';

import MyCards from './components/MyCards';
import LogCard from './components/LogCard';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/" >Common Card Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">My Cards</Nav.Link>
            <Nav.Link as={Link} to='/log'>Log Cards</Nav.Link>
          </Nav>
          <Form inline>
            <Button href="http://localhost:8080/api/cards/download" target="_blank" rel="noopener noreferrer" variant="success">Export to CSV</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/' component={ MyCards } />
        <Route exact path='/log' component={ LogCard } />
      </Switch>
    </Router>
  );
}

export default App;
