// Run this code in prompt: json-server -H 0.0.0.0 -p 3000 -w db.json

import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.1.8:1313",
});
