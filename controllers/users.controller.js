const { response } = require('express');

const getUsers = (req, res = response) => {
    res.json({
        message: 'get Users controlador'
    });
}

const postUsers = (req, res) => {
    res.json({
        message: 'post Users controlador'
    });
}

const putUsers = (req, res) => {
    res.json({
        message: 'put Users controlador'
    });
}

const deleteUsers = (req, res) => {
    res.json({
        message: 'delete Users controlador'
    });
}

module.exports = {
    getUsers, 
    postUsers,
    putUsers,
    deleteUsers,  
}