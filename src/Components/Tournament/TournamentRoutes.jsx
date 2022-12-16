import React from "react";
import { Routes, Route } from "react-router-dom";
import TournamentDetails from "./TournamentDetails/TournamentDetails";
import Tournament from "./Tournament";

const TournamentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Tournament />} />
      <Route path="/:id/detail" element={<TournamentDetails />} />
    </Routes>
  );
};

export default TournamentRoutes;
