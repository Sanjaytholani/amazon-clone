import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-e7542.cloudfunctions.net/api",
  //http://localhost:5001/clone-e7542/us-central1/api
});

export default instance;
