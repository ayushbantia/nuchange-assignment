import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-fullstack-69087.cloudfunctions.net/api",
  // "http://localhost:5001/clone-fullstack-69087/us-central1/api",
});

export default instance;
