let express=require('express');
let pruebaCont=require('../controllers/pruebaCont');
let router=express.Router();

router.get('/bienvenida', pruebaCont.bienvenida);
router.get('/verificar', pruebaCont.verificar);
router.post('/recibir', pruebaCont.recibir);
router.post('/sumar', pruebaCont.sumar);

module.exports = router;
