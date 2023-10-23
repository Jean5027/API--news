const create = (req, res) => {
    const {name, username, email, password, avatar, backgroud} = req.body;

    if (!name || !username || !email || !password || !avatar || !backgroud){
        res.status(400).send({message: "submit all fields for registration"})
    }


    res.status(201).send({
        message: "User created successfully",
        user: {
            name,
            username,
            email,
            avatar,
            backgroud,

        },
        
    })
};

module.exports = { create };