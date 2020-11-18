import React from 'react';
import { Header } from '../components/Header/Header';
import { Budget } from '../components/Budget/Budget';
import { Footer } from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';

export const Home = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>HHRR helper</title>
        <meta name='description' content='Ayuda al reclutador a encontrar talento con presupuesto' />
      </Helmet>
      <Header />
      <Budget />
      <Footer />
    </>
  );
};