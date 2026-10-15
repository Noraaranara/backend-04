const User = require("../models/user");

const getUsers = (request, response) => {};

const getUser = (request, response) => {
	const { user_id } = request.params;
	response.status(200);
	response.send(`User id: ${user_id}`);
};

const createUser = (request, response) => {
	return User.create({ ...request.body })
		.then((user) => {
			response.status(201).send(user);
		})
		.catch((error) => {
			response.status(500).send(error.message);
		});
};

const updateUser = (request, response) => {};

const deleteUser = (request, response) => {};

module.exports = {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
};
