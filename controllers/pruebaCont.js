class Pruebacont{
    bienvenida(req, res) {
        res.status(200).json({ mensaje: '¡Bienvenido ' });
    }

    verificar(req, res) {
        res.status(200).json({ mensaje: 'El servidor funciona correctamente', estado: true });
    }

    recibir(req, res) {
        let { nombre, edad } = req.body;
        res.status(200).json({ nombre, edad });
    }

    sumar(req, res) {
        let { numero1, numero2 } = req.body;
        let resultado = Number(numero1) + Number(numero2);
        res.status(200).json({ resultado });
    }
}
module.exports=new Pruebacont