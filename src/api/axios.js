import axios from "axios";
const url = "http://localhost:4000";
// const url = "http://13.233.183.128/api";
export default axios.create({
    baseURL: url
});
