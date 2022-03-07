const express = require('express')
const cors = require("cors")

const routes = require("./routes")
const { PORT } = require("./config/config")

const app = express()


app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}));

app.use(express.json());

app.use("/", routes)

app.listen(PORT, () => {
    console.log(`Server's listening on Port: ${PORT}`)
})