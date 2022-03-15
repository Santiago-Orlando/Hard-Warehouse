import { TextareaAutosize } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

import AdminProductsList from "./AdminProductsList"
import { postProduct } from "../store/products"
import tagFunction from "../utils/tagsFunction"

import useInput from "../hooks/useInput"
import useInputNumber from "../hooks/useInputNumber"
import { Link, useNavigate } from "react-router-dom"

const Admin = () => {
  let viewForm = false
  const author = useSelector(state => state.user.data.data)
  const title = useInput("title")
  const category = useInput("category")
  // const subCategory = useInput("subCategory")
  const details = useInput("details")
  const image = useInput("image") // Ver si es array
  const price = useInputNumber("price")
  const stock = useInputNumber("stock")

  const tag1 = useInput("tag1")
  const tag2 = useInput("tag2")
  const tag3 = useInput("tag3")
  const tag4 = useInput("tag4")
  const tags = tagFunction([tag1.value, tag2.value, tag3.value, tag4.value])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    // e.preventDefault()
    dispatch(
      postProduct({
        title: title.value,
        author: author.fullName,
        category: category.value,
        stock: stock.value,
        price: price.value,
        image: image.value,
        details: details.value,
        tags,
      })
    )
    // navigate("/admin")
  }

  // console.log("CATEGORY", category.value)
  return (
    <>
      <div className="loginContainer">
        <h2>AGREGAR NUEVO PRODUCTO</h2>
        <form className="logForm" onSubmit={handleSubmit}>
          <input
            className="logInputs"
            {...title}
            type="text"
            placeholder="Titulo"
          />

          <label  for="category"  ></label>
          <select className="logInputs"  name="category" {...category} type="text">
            <option value="">- Categoria -</option>
            <option value="componentes">Componentes</option>
            <option value="equipos armados">Equipos Armados</option>
            <option value="notebooks">Notebooks</option>
            <option value="monitores">Monitores</option>
            <option value="perifericos">Perifericos</option>
          </select>

          {/* <input
            className="logInputs"
            {...subCategory}
            type="text"
            placeholder="Sub - Categoría"
          /> */}

          <input
            className="logInputs"
            {...price}
            type="number"
            placeholder="Precio"
          />

          <TextareaAutosize
            className="logInputs"
            {...details}
            type="text"
            placeholder="Descripción"
            minRows={3}
          />

          <input
            className="logInputs"
            {...image}
            type="text"
            placeholder="url imagen"
          />

          <input
            className="logInputs"
            {...stock}
            type="number"
            placeholder="Stock"
          />

          <span>
            <input
              className="logInputs"
              {...tag1}
              type="text"
              placeholder="Tag 1"
            />

            <input
              className="logInputs"
              {...tag2}
              type="text"
              placeholder="Tag 2"
            />

            <input
              className="logInputs"
              {...tag3}
              type="text"
              placeholder="Tag 3"
            />

            <input
              className="logInputs"
              {...tag4}
              type="text"
              placeholder="Tag 4"
            />
          </span>

          <button className="logBtn" type="submit">
            AGREGAR
          </button>

          <div></div>
        </form>
      </div>
      {/* <AdminProductsList /> */}
    </>
  )
}

export default Admin
