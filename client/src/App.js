import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/screens/home";
import Signin from "./components/screens/login";
import Signup from "./components/screens/signup";
import Profile from "./components/screens/profile";
import CreatePost from "./components/screens/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/create">
        <CreatePost />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
