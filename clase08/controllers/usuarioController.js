
const userModel = require('../db/userModel');
const userServicio = require('../servicios/userServicio');
const user = new userServicio();

const guardarUsuario = async(req, res) => {

await user.createUser(req.body);
res.json({ user:'Creado'
})
console.log(req.body);
}

const listarUsuario = async (req, res) => {
    const usuarios = await user.getAllUser()
    res.json(usuarios)};


const buscarUno = async (req, res) => {
    const {  
    params: {id}}  = req;
    const buscado = await user.getUser(id);
    res.json('Usuario buscado');
};

const actualizarUsuario = async (req, res) => {
    const {  
        body,
        params: {id}  } = req;
    const actualizado = await user.updateUser(id, body);
    res.json('Usuario Actualizado');
};



const borrarUsuario = async (req, res) => {
    const {  
        params: {id}  } = req;
        console.log(id);
     await user.deleteUser(id);
     res.json({
        mensaje: 'Usuariro eliminado'
     });
    };

module.exports = {
  guardarUsuario,
  listarUsuario, 
  buscarUno,
  actualizarUsuario, 
  borrarUsuario
}





