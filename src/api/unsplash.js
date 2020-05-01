import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e874306c7270ce946aff69ba389ca1e6944383fad86c888939ac6654c915b626",
  },
});
