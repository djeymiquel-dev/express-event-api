import userData from "../../data/users.json" assert { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const updateUser = (id, username, password, name, image) => {
  const user = userData.users.find((user) => user.id === id);

  if (!user) {
    throw new NotFoundError("User", id);
  }

  user.username = username ?? user.username;
  user.password = password ?? user.password;
  user.name = name ?? user.name;
  user.image = image ?? user.image;

  return user;
};

export default updateUser;
