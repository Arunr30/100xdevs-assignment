const jwt = require('jsonwebtoken')
const { JWT_ADMIN_PASSWORD } = require('../config')

function adminMiddleware(req, res, next) {
    const token = req.headers.token
    const decodedString = jwt.verify(token, JWT_ADMIN_PASSWORD)

    if (decodedString) {
        req.userId = decodedString.id
        next()
    } else {
        res.status(403).send({
            msg: 'invalid token!',
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware,
}
