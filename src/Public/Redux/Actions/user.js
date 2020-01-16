import axios from "axios";

export const getuser = user => {
  console.log("asdis", user);

  return {
    type: "GET_USER",
    payload: axios.get(`https://api.github.com/users/${user}/repos`)
  };
};
