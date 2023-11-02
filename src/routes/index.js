const express = require('express');
const crudRouter = require('./crud.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/crud', crudRouter);


module.exports = router;