const {default:axios} = require('axios');

const apiKey = "cc6ed012979a2c874d7df6e10051c875f756465ee5ab0f59552a04b31c0b0d6fe14aa94ab23f649efd50e8a3f8275031fef1041597e9fc69627ed69ffcf2b467630009162e15b1778863c31957f8803eb6e9ec886d9a033173ef875c83caa8c83af4c830594169c62949e900d6d474c084738487d550cc4b8dd4368446d4a3fe";

const apiUrl = `https://flourish-dashboard.onrender.com/api`;

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `bearer ${apiKey}`
  }
});

export default apiClient;
