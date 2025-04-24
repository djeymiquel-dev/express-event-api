import userData from "../../data/users.json" assert { type: "json" }; //  zorg ervoor dat je de juiste extensie gebruikt!!

const getUsers = () => {
  return userData.users;
};

export default getUsers;
