const mongoose = require('mongoose');

const connectDataBase = () => {
    console.log("wait connect to do database")

    mongoose.connect("mongodb+srv://jean5027:88245374Je@cluster0.qtogziv.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("mongodb conectado!"))
    .catch((error) => console.log(error));
};

module.exports = connectDataBase;
