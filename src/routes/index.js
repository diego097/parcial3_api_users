const express = require('express')
const Router = express.Router();

const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')

//Metodos
Router.post("/signup", userCtrl.signUp);
Router.post("/signin", userCtrl.signIn)
Router.get("/private", auth ,(req, res) => {
    res.status(200).send({message: 'Tienes acceso al sistema'})
})

module.exports = Router