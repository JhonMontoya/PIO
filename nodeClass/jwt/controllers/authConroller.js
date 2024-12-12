const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users=[];

exports.register = async (req, res) =>{
    const {username, password} = req.body;

    if(!username || !password){
        return res.status(400).json({message: "Usuario y contraseña son obligatoras"});
    };

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {username, password: hashedPassword};

    user.push(user);
    res.status(201).json({message: "usuario registrado correctamete"});
};

exports.login = async (req, res)=>{
    const {username, password} = req.body;

    const user =users.find((u)=>u.username=== username);

    if(user){
        return res.status(400).json({message: "usuario no encontrado"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(401).json({message: "credenciales inválidas"});
    }

    const token = jwt.sign({username: user.username}, process.env.JWT_SECRET, {
        expiresIn : '1h',
    });
    res.json({token});

};

exports.profile = (req, res)=>{
    res.json({message: `Bienvenido ${req.username}`});
};