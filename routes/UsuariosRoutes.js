let express=require('express');
let UsuariosCont=require('../controllers/UsuariosCont');
let router = express.Router();

router.post('/guardar', UsuariosCont.guardar);
router.get('/traer', UsuariosCont.traer);
router.get('/buscar', UsuariosCont.buscar);
router.put('/actualizar', UsuariosCont.actualizar);
router.delete('/eliminar', UsuariosCont.eliminar);

module.exports = router;