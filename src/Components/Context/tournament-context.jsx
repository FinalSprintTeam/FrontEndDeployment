import React, { useState } from "react";
import { postTournament } from "../../api/services/tournament/postTournament";
import { putTournament } from "../../api/services/tournament/putTournament";
import { deleteTournament } from "../../api/services/tournament/deleteTournament";
import { getData } from "../../api/services/getData";
import { useMemo } from "react";
import {
  addMemberToTournament,
  removeMemberFromTournament,
} from "../../api/services/tournament/tournamentMember";

const TournamentContext = React.createContext({
  getTournament: (api) => {},
  postTournament: (tournament) => {},
  updateTournament: (tournament) => {},
  deleteTournament: (id) => {},
  tournaments: [],
  currentTournament: () => {},
  setCurrentId: (id) => {},
  addMemberToTournament: (memberId, tournamentId, score) => {},
  removeMemberFromTournament: (memberId, tournamentId) => {},
});

export const TournamentContextProvider = (props) => {
  const [tournaments, setTournaments] = useState([]);
  const [currentId, setCurrentId] = useState(false);

  // Memory
  const currentTournament = useMemo(
    () => tournaments.find((tournament) => tournament.id === currentId),
    [tournaments, currentId]
  );

  const getTournamentHandler = async () => {
    const tournamentData = await getData("/api/tournament/all");
    setTournaments(tournamentData);
  };

  const postTournamentHandler = async (tournament) => {
    const newTourney = await postTournament("/api/tournament/new", tournament);
    setTournaments([...tournaments, newTourney]);
  };

  const updateTournament = async (tournament) => {
    var tournamentToUpdate = { ...tournament, id: currentTournament.id };
    putTournament(
      `/api/tournament/${tournamentToUpdate.id}/edit`,
      tournamentToUpdate
    );

    setTournaments(
      tournaments.map((tourney) =>
        tourney.id === tournamentToUpdate.id ? tournamentToUpdate : tourney
      )
    );
    setCurrentId(tournamentToUpdate.id);
  };

  const deleteTournamentHandler = (id) => {
    deleteTournament(id);
    setTournaments(tournaments.filter((tournament) => tournament.id !== id));
  };

  const addMemberToTournamentHandler = async (
    memberId,
    tournamentId,
    score
  ) => {
    const data = await addMemberToTournament(memberId, tournamentId, score);
    setTournaments(
      tournaments.map((tourney) => (tourney.id === data.id ? data : tourney))
    );
    setCurrentId(data.id);
  };

  const removeMemberFromTournamentHandler = async (memberId, tournamentId) => {
    const data = await removeMemberFromTournament(memberId, tournamentId);

    setTournaments(
      tournaments.map((tourney) => (tourney.id === data.id ? data : tourney))
    );
    setCurrentId(data.id);
  };

  const contextValue = {
    getTournament: getTournamentHandler,
    postTournament: postTournamentHandler,
    updateTournament: updateTournament,
    deleteTournament: deleteTournamentHandler,
    tournaments: tournaments,
    currentTournament: currentTournament,
    setCurrentId: setCurrentId,
    addMemberToTournament: addMemberToTournamentHandler,
    removeMemberFromTournament: removeMemberFromTournamentHandler,
  };

  return (
    <TournamentContext.Provider value={contextValue}>
      {props.children}
    </TournamentContext.Provider>
  );
};

export default TournamentContext;
