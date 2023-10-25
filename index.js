const express = require('express')
const userRoute = require("./src/routes/user.route")
const connectDataBase = require("./src/database/db")

const port = 3000

connectDataBase()

const app = express()

app.use(express.json());
app.use("/user", userRoute);


app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));