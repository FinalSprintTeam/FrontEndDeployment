import { API_ENDPOINT } from "../../connection/server";

const postMember = async (member, address, memberType) => {
  // Add new address to db
  const resAddress = await fetch(API_ENDPOINT + "/api/address/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(address),
  });

  // Returns ID of new address object
  const addressData = await resAddress.json();

  // Create new member object using new address ID
  const res = await fetch(
    API_ENDPOINT +
      `/api/member/new?addressID=${addressData.id}&typeName=${memberType}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(member),
    }
  );
  const data = await res.json();

  // Returns new member object, formatted for adding to the front end member list
  return data;
};

export { postMember };
