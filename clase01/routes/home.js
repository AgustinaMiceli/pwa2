

const {Router} = require('express');
const router= Router();

router.get ('/', (req, res) => {
    res.send('Buenas noches, bienvenido a la App')
});

router.get ('/nosotros', (req, res) => {
    res.send('Somos el equipo que desarrolla un trabajo excelente')
});

module.exports= router;
