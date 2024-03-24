const {default:axios} = require('axios');

const apiKey = "3b79363d46c0691cd30a98eb0d00ee849cf103c7e81a7bbf5701d72a512dc205112e1a436ecd1f567ad902f0a67d5ae72fd32cf5db2733681fc0a88b7de2a5a0be334ddf2100c786ff46b6eb707d93d4e25e467f3e590fd875cfd9d4a4e05be3cf0c0c3b79d6a3f0fed46493a84e12537974f4d811b6d501a197e4b9fcdffe25";

const apiUrl = `https://flourish-dashboard.onrender.com/api`;

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `bearer ${apiKey}`
  }
});

export default apiClient;
