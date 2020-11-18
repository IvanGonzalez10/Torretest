import React from 'react';
import { Budget } from '../components/Budget/Budget';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>HHRR helper</title>
        <meta name='description' content='Ayuda al reclutador a encontrar talento con presupuesto' />
      </Helmet>
      <Budget />
    </>
  );
};