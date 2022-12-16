import { API_ENDPOINT } from "../../connection/server";

const putTournament = async (api, tournament) => {
  const res = await fetch(API_ENDPOINT + api, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tournament),
  });
  //   const data = res.json();
  //   return data;
};

export { putTournament };
