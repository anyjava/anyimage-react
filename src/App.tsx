import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function App() {
  return <div>
      <Navbar bg="light" expand="xl">
        <Navbar.Brand href="#home">AnyImage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    <Container id="container0">
      <BrowserRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
      </BrowserRouter>
    </Container>
  </div>
}

export default App;

