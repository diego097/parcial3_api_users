module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://mongoUser/user',
    SECRET_TOKEN: 'miclavedetokens'
}