import axios from "axios";

axios.defaults.baseURL = "https://positive-note-ec9b8f1f6fb7.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;