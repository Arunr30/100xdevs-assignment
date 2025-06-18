import jwt from 'jsonwebtoken';
const JWT_SECRET = '123445';
export const userMiddleware = (req, res, next) => {
    const header = req.headers['authorization'];
    const decoded = jwt.verify(header, JWT_SECRET);
    if (decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: 'you are not logged in',
        });
    }
};
