import { useState } from "react"

const useInputNumber = () => {
  const [value, setValue] = useState()

  const onChange = event => {
    setValue(event.target.value)
  }

  return { value, onChange }
}

export default useInputNumber
