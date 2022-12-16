import { API_ENDPOINT } from "../../connection/server";

const deleteTournament = async (tournamentId) => {
  const res = await fetch(
    API_ENDPOINT + `/api/tournament/${tournamentId}/delete`,
    {
      method: "DELETE",
    }
  );
  //   const data = res.json();
  //   return data;
};

export { deleteTournament };
