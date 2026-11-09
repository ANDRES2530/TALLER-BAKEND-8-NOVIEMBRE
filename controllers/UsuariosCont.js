class UsuariosCont {

    guardar=(req,res)=>{
    const{nombre,apellido,direccion,telefono}=req.body
    conectar.query("INSERT INTO usuarios(nombre,apellido,direccion,telefono)values (?,?,?,?)",
        [nombre,apellido,direccion,telefono],(error,resultado)=>{
            if(error){
                return res.json({"mensaje":"error al registrar el usuario"})
            }
            else{
                return res.json({"mensaje":"usuario registrado correctamente"})
            }
        })
    }

    traer=(req,res)=>{
        conectar.query("SELECT * FROM usuarios",(error,resultado)=>{
            if (error){
                return res.json({"mensaje":"error al traer los datos"})
            }
            else{
                return res.json(resultado)
            }
        })
    }

    buscar = (req, res) => {
        const { id } = req.params;
        const query = 'SELECT * FROM usuarios WHERE id = ?';
        this.db.query(query, [id], (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            res.status(200).json(results[0]);
        });
    }

    actualizar = (req, res) => {
        const { id } = req.params;
        const { nombre, apellido, direccion, telefono } = req.body;
        const query = 'UPDATE usuarios SET nombre = ?, apellido = ?, direccion = ?, telefono = ? WHERE id = ?';
        this.db.query(query, [nombre, apellido, direccion, telefono, id], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            res.status(200).json({ mensaje: 'Usuario actualizado exitosamente' });
        });
    }

    eliminar = (req, res) => {
        const { id } = req.params;
        const query = 'DELETE FROM usuarios WHERE id = ?';
        this.db.query(query, [id], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
        });
    }
}

module.exports =new UsuariosCont;
