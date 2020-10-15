import React from "react";
import { Navbar } from "react-bootstrap";
import MainPage from "./pages/Main";
function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Movie lists</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <MainPage />
    </div>
  );
}

export default App;
