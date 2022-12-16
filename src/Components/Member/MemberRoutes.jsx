import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MemberDetails from './MemberDetails/MemberDetails';
import Member from './Member';

const MemberRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Member />} />
      <Route path='/:id/detail' element={<MemberDetails />} />
    </Routes>
  );
};

export default MemberRoutes;
