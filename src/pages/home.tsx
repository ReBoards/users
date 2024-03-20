import React from 'react';
import { NavBar } from '../components/private/shared/navbar';
import { HomeMain } from '../components/private/home/main';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <HomeMain />
    </>
  );
};

export default Home;
