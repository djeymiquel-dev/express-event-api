import userData from "../../data/users.json" assert { type: "json" }; //  zorg ervoor dat je de juiste extensie gebruikt!!

const getUsers = () => {
  const users = userData.users;
  return users;
};

export default getUsers;
