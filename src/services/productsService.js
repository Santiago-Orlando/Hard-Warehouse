import axios from "axios"

export const allProductsService = () => {
  return axios.get(`https://fakestoreapi.com/products`).then(res => res.data)
}

export const singleProductService = () => {
  return axios.get(`https://fakestoreapi.com/products/1`).then(res => res.data)
}

export const categoriesProductService = (category) => {
  return axios.get(`https://fakestoreapi.com/products/category/${category}`).then(res => res.data)
}