import AdminProductsList from "./AdminProductsList"
import AdminProductForm from "../commons/AddProductForm"
import EditProductForm from "../commons/EditProductForm"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useLocation } from "react-router"

const Admin = () => {
  const editProduct = useSelector(state => state.products.singleProduct)
  const admin = useSelector(state => state.user)
  const location = useLocation()


  return (
    <>
    {admin.logged  && admin.data.data.admin ? (
      <>
      {location.pathname === "/admin/administrador" ? <AdminProductForm /> : <EditProductForm />}
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
