const express = require('express')
const app = express()

// ROTA
  // Method HTTP - CRUD (create, read , update, delete)
    //GET - pega a info
    //POST - cria uma info
    //PUT - altera uma info
    //PATH - altera parte da info
    //DELETE - apaga uma info

  // Name - um identificador da rota


  // Funcion (Callback) - Responsavel por executar algum comando

app.get("/soma", (req, res) => {
  const soma = 1 + 1;

  res.send({soma: soma})
  //res.json(soma)



});


app.listen(3000)