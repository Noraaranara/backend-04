const express = require("express");
const dotenv = require("dotenv")

const app = express();

const { PORT = 3005, API_URL = "http://127.0.0.1" } = process.env;

app.get("/", (request, response) => {
	response.status(200);
	response.send("Hello world!");
});

app.listen(PORT, () => {
	console.log(`${API_URL}:${PORT}`);
});
