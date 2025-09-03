const apiClient = require("../utils/apiClient");

class PostClient {
    static getPosts() {
        return apiClient.get("/posts");
    }

    static getPostById(id) {
        return apiClient.get(`/posts/${id}`);
    }

    static createPost(data) {
        return apiClient.post("/posts", data);
    }
}

module.exports = PostClient;
