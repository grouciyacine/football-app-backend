import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(403).JSON("Token is not authenticated!");
    jwt.verify(token, process.env.SECRETE_KEY, (err, user) => {
        if (err) return res.status(403).JSON("Token is not valid!");
        req.user = user;
        next()
    });
};