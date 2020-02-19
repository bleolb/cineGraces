const { Router } = require('express');

const login = require('../controllers/login');
const compra = require('../controllers/compraCRUD');
const horario = require('../controllers/horarioCRUD');
const pelicula = require('../controllers/peliculaCRUD');
const persona = require('../controllers/personaCRUD');
const sala = require('../controllers/salaCRUD');
const sala_pelicula = require('../controllers/sala_peliculaCRUD');

const router = Router();

router.get('/', (req, res) => res.send('Bienvenido'))

router.post('/login', login.login);

router.get('/compra', compra.getData);
router.post('/compra', compra.postData);
router.put('/compra', compra.putData);
router.delete('/compra', compra.deleteData);

router.get('/horario', horario.getData);
router.post('/horario', horario.postData);
router.put('/horario', horario.putData);
router.delete('/horario', horario.deleteData);

router.get('/pelicula', pelicula.getData);
router.post('/pelicula', pelicula.postData);
router.put('/pelicula', pelicula.putData);
router.delete('/pelicula', pelicula.deleteData);

router.get('/persona', persona.getData);
router.post('/persona', persona.postData);
router.put('/persona', persona.putData);
router.delete('/persona', persona.deleteData);

router.get('/sala', sala.getData);
router.post('/sala', sala.postData);
router.put('/sala', sala.putData);
router.delete('/sala', sala.deleteData);

router.get('/sala_pelicula', sala_pelicula.getData);
router.post('/sala_pelicula', sala_pelicula.postData);
router.put('/sala_pelicula', sala_pelicula.putData);
router.delete('/sala_pelicula', sala_pelicula.deleteData);

module.exports = router;