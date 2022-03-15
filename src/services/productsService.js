import axios from "axios"

export const allProductsService = async () => {
  const allProducts = await axios.get(`https://fakestoreapi.com/products`)
  return allProducts.data
}

export const singleProductService = async id => {
  const singleProduct = await axios.get(`https://fakestoreapi.com/products/${id}`)
  return singleProduct.data
}

export const categoriesProductService = async category => {
  const categoryProducts = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
  return categoryProducts.data
}

export const saleProductsService = async () => {
  const saleProducts = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
  return saleProducts.data
}

export const searchProductsByTag = async (tag) => {
  const searchedProducts =  await axios.get(`http://localhost:3001/search/?q=tags=${tag}`)
  return searchedProducts.data
}

export const searchProductsByTitle = async (tag) => {
  const searchedProducts =  await axios({
    method: "GET",
    data: { tags: tag },
    withCredentials: true,
    url: "http://localhost:3001/products/showProducts",
  })
  console.log ('RESULTADO BACK', searchedProducts.data)
  return searchedProducts.data
}


