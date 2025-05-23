import userData from "../../data/users.json" assert { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

// gebruik findIndex om het object uit de array te verwijderen

const deleteUser = (id) => {
  const index = userData.users.findIndex((user) => user.id === id);

  if (index === -1) {
    throw new NotFoundError("User", id);
  }
  userData.users.splice(index, 1);
  return id;
};

export default deleteUser;
