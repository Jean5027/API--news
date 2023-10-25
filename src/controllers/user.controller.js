const userService = require('../services/user.service');

const create = async (req, res) => {
    const {name, username, email, password, avatar, backgroud} = req.body;

    if (!name || !username || !email || !password || !avatar || !backgroud){
        res.status(400).send({message: "submit all fields for registration"})
    }

    const user = await userService.create(req.body);

    if (!user){
        return res.status(400).send({message: "Error creating User "})

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

module.exports = { create };