const User = require('../models/User');

const create = (body) => User.create(body);

const findAllServices = () => User.find();

const findByIdServices = (id) => User.findById(id);

module.exports = {
    create,
    findAllServices,
    findByIdServices
};