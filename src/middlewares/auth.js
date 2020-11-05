const { response } = require('express')
const services = require('../services/index')
const kafka = require('kafka-node')

const client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'})

var consumer = new kafka.Consumer(client, [ { topic: 'test' } ])

consumer.on('token', function (token) {
    console.log(token);    
})
function isAuth(req ,res ,next) {
    if(!req.headers.authorization){
        return res.status(403).send({message: 'no tienes autorización'})
    }

    const token = req.headers.authorization.split(" ")[1]
    services.decodeToken(token)
        .then(response => {
            req.user = response
            next()
        })
        .catch(response => {
            res.status(response.status)
        })    
}

module.exports = isAuth