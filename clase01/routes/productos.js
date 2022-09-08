
const {Router} = require('express');
const router= Router();
const {
    bienvenidaProductos,
    listadoProductos,
    guardarProductos
} =require ('../controllers/productosController');



router.get ('/', (req, res) => {
    res.send(`Buenas noches, bienvenido a los Productos`)
});

router.get ('/nosotros', (req, res) => {
    res.send(`Somos los productos`)
});


router.post ('/guardar', guardarProductos);



module.exports= router;
