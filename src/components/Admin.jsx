import AdminProductsList from "./AdminProductsList"
import AdminProductForm from "../commons/AddProductForm"
import EditProductForm from "../commons/EditProductForm"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Admin = () => {
  const editProduct = useSelector(state => state.products.singleProduct)
  const admin = useSelector(state => state.user)

  return (
    <>
    {admin.logged  && admin.data.data.admin ? (
      <>
      {!editProduct._id ? <AdminProductForm /> : <EditProductForm />}
      <AdminProductsList />
      </>
    )
    : 
      (
        <>
      <h1>No tiene permisos de Administrador</h1>
      <Link to="/">IR A INICIO</Link>
        </>
      )
  }
  </>
  )
}

export default Admin
