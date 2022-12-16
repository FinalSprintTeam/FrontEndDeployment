import { API_ENDPOINT } from "../../connection/server";

const addMemberToTournament = async (memberId, tournamentId, score) => {
  const res = await fetch(
    API_ENDPOINT +
      `/api/tournament/addMember?memberId=${memberId}&tournamentId=${tournamentId}&score=${score}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await res.json();
  return data;
};

const removeMemberFromTournament = async (memberId, tournamentId) => {
  const res = await fetch(
    API_ENDPOINT +
      `/api/tournament/removeMember?memberId=${memberId}&tournamentId=${tournamentId}`,
    {
      method: "POST",
    }
  );
  const data = res.json();
  return data;
};

export { addMemberToTournament, removeMemberFromTournament };
