import { API_ENDPOINT } from "../../connection/server";

const putMember = async (member, address, memberType) => {
  // Add new address to db, if the same or already existing address, will return the corresponding ID
  const resAddress = await fetch(API_ENDPOINT + "/api/address/edit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(address),
  });

  // Returns ID of new/existing address object
  const addressData = await resAddress.json();

  // Create new member object using new address ID
  const res = await fetch(
    API_ENDPOINT +
      `/api/member/${member.id}/edit?addressID=${addressData.id}&typeName=${memberType}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(member),
    }
  );
  const data = await res.json();

  // Returns new member object, formatted for adding to the front end member list
  return data;
};

export { putMember };
