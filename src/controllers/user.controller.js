const userService = require('../services/user.service');
const mongoose = require('mongoose')


const create = async (req, res) => {
    const { name, username, email, password, avatar, backgroud } = req.body;

    if (!name || !username || !email || !password || !avatar || !backgroud) {
        res.status(400).send({ message: "submit all fields for registration" })
    }

    const user = await userService.create(req.body);

    if (!user) {
        return res.status(400).send({ message: "Error creating User " })

    }


    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            backgroud,

        },

    })
};

const findAll = async (req, res) => {
    const users = await userService.findAllServices();

    if (users.lengh === 0) {
        return res.status(400).send({ message: "there are not registered users" });
    }

    res.send(users)
};

const findById = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({ messege: "invalid ID"})
    }

    const user = await userService.findByIdServices(id)

    if (!user) {
        return res.status(400).send({ messege: "User not found!" })
    }

    res.send(user)
}

module.exports = { create, findAll, findById};