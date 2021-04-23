import axios from "axios";

const restClient = axios.create({
	baseURL: "https://auto1-mock-server.herokuapp.com/api/",
});

export default restClient;
