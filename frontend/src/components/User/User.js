import React from 'react';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import Auxilio from '../Auxilio/Auxilio';

const User = () => {
  return (
    <section className="container">
      <Routes>
        <Route path="/" element={<Auxilio />} />
      </Routes>
    </section>
  );
};

export default User;
