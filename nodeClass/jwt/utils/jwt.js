const jwt = require('jsonwebtoken');

exports.verifyToken = (req,res,next)=>{
    const tokenHeader = req.headers['authorization'];
    console.log(tokenHeader);

    if(!tokenHeader) return res.status(403).json({message: 'Token no proporcionado'});

    const token = tokenHeader.split('')[1];
    console.log('Token procesado', token);

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        res.user = decode;
        next();
    } catch (error) {
        console.error('Error al verificar el token', error.message);
        return res.status(401).json({message: 'token invalido'});
    }
};