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