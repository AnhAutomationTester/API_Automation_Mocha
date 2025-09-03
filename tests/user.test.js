const { expect } = require("chai");
const UserClient = require("../clients/userClient");

describe("User API Tests", () => {
    it("GET /users should return users", async () => {
        const res = await UserClient.getUsers();
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an("array");
    });

    it("GET /users/1 should return correct user", async () => {
        const res = await UserClient.getUserById(1);
        expect(res.status).to.equal(200);
        expect(res.data).to.have.property("id", 1);
    });

    it("POST /users should create user", async () => {
        const newUser = { name: "Test User", email: "test@example.com" };
        const res = await UserClient.createUser(newUser);
        expect(res.status).to.equal(201);
        expect(res.data).to.include(newUser);
    });
});
