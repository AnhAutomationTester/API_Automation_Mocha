const apiClient = require("../utils/apiClient");

class UserClient {
    static getUsers() {
        return apiClient.get("/users");
    }

    static getUserById(id) {
        return apiClient.get(`/users/${id}`);
    }

    static createUser(data) {
        return apiClient.post("/users", data);
    }
}

module.exports = UserClient;
