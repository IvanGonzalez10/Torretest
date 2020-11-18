import React from "react";
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { Home } from "./pages/Home";
import { Router } from "@reach/router";
import { Profile } from './pages/Profile';
import { Instructions } from './pages/Instructions';
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <NotFound default />
      <Home path="/" />
      <Profile path="/profile" />
      <Instructions path="/instructions" />
    </Router>
    <NavBar />
    <Footer />
  </>
);
