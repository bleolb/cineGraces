const Persona = require('../models/persona');

const login = (req, res) => {
    const correo = req.body.correo
    const clave = req.body.clave

    Persona.findAll()
        .then(resultado => {
            resultado.forEach(element => {
                if (element.correo === correo && element.clave == clave) {
                    res.status(200).json({
                        ok: true,
                        mensaje: "found"
                    })
                }
            })
            return res.status(500).json({
                ok: false,
                mensaje: 'no-found'
            })
        })
}

module.exports = {
    login,
}