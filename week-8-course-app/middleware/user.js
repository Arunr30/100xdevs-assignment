const jwt = require('jsonwebtoken')
const { JWT_USER_PASSWORD } = require('../config')

function userMiddleware(req, res, next) {
    const token = req.headers.token
    const decodedString = jwt.verify(token, JWT_USER_PASSWORD)

    if (decodedString) {
        req.id = decodedString.id
        next()
    } else {
        res.status(403).send({
            msg: 'invalid token!',
        })
    }
}

module.exports = {
    userMiddleware: userMiddleware,
}
