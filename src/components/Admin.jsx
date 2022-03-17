
import AdminProductsList from "./AdminProductsList"
import AdminProductForm from "../commons/AddProductForm"
import EditProductForm from "../commons/EditProductForm"
import { useSelector } from "react-redux"


const Admin = () => {
  const editProduct = useSelector(state => state.products.singleProduct)

  return (
    <>
      {!editProduct._id ? <AdminProductForm /> : <EditProductForm />}
      <AdminProductsList />
    </>
  )
}

export default Admin
