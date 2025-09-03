const axios = require("axios");
const config = require("./config");

const apiClient = axios.create({
    baseURL: config.baseUrl,
    timeout: config.timeout,
    headers: {
        "Content-Type": "application/json"
    }
});

// Interceptor log
apiClient.interceptors.request.use(req => {
    console.log(`👉 [${req.method.toUpperCase()}] ${req.baseURL}${req.url}`);
    return req;
});

apiClient.interceptors.response.use(res => {
    console.log(`✅ Response: ${res.status}`);
    return res;
}, err => {
    console.error(`❌ Error: ${err.message}`);
    return Promise.reject(err);
});

module.exports = apiClient;
