const { default: apiClient } = require("./apiClient")

 const getProducts =() =>{ 
  return apiClient.get("/products")
} 
exports.default = { 

  getProducts: getProducts
}