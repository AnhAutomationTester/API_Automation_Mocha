const { expect } = require("chai");
const PostClient = require("../clients/postClient");

describe("Post API Tests", () => {
    it("GET /posts should return posts", async () => {
        const res = await PostClient.getPosts();
        expect(res.status).to.equal(200);
        expect(res.data).to.be.an("array");
    });

    it("GET /posts/1 should return post with id=1", async () => {
        const res = await PostClient.getPostById(1);
        expect(res.status).to.equal(200);
        expect(res.data).to.have.property("id", 1);
    });

    it("POST /posts should create new post", async () => {
        const newPost = { title: "foo", body: "bar", userId: 1 };
        const res = await PostClient.createPost(newPost);
        expect(res.status).to.equal(201);
        expect(res.data).to.include(newPost);
    });
});
