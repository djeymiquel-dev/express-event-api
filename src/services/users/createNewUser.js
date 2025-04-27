import e from "express";
import userData from "../../data/users.json" assert { type: "json" }; //  zorg ervoor dat je de juiste extensie gebruikt!!
import { v4 as uuid } from "uuid";

const createNewUser = (username, password, name, image) => {
  // Check if the user already exists
  const existingUserId = userData.users.find((user) => user.name === name);
  const existingUserName = userData.users.find(
    (user) => user.username === username
  );

  if (existingUserId || existingUserName) {
    throw new Error(`User with name ${name} already exists`);
  } else if (!username || !password || !name) {
    throw new Error("Username, password, and name are required");
  } else {
    const newUser = {
      id: uuid().toString(),
      username,
      password,
      name,
      image,
    };
    userData.users.push(newUser);
    return newUser;
    // Save the updated user data to the JSON file
  }
};

export default createNewUser;
