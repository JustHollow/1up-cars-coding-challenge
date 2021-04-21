import axios from "axios";

const restClient = axios.create({
	baseURL: "http://auto1-mock-server.herokuapp.com/api/",
});

export default restClient;
