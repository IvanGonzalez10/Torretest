import React from "react";
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { Home } from "./pages/Home";
import { Router } from "@reach/router";
import { Profile } from './pages/Profile';
import { Facts } from './pages/Facts';
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
      <Facts path="/facts" />
    </Router>
    <NavBar />
    <Footer />
  </>
);
