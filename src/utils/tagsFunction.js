const tagFunction = (arr) => {
    return arr.filter(tag => tag !== "").map(tag => tag.toLowerCase())
}

export default tagFunction