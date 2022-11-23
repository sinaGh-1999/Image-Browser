import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID uwiqQvwYy-rpXkJmMO0JVd1oo9EkLTod6P0PUHZvxxU",
  },
});
