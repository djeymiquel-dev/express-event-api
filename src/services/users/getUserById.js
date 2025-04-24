import userData from "../../data/users.json" assert { type: "json" }; //  zorg ervoor dat je de juiste extensie gebruikt!!

const getUserById = (id) => {
  const user = userData.users.find((user) => user.id === id);

  if (!user) {
    throw new Error(`User with id ${id} not found`);
  }

  return user;
};

export default getUserById;
