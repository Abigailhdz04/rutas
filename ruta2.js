
const express = require('express');
const router = express.Router();
const logger = require('./funcion');

router.use(logger);

router.get('/', (req, res) => {
    res.send('Estas en la ruta 2');
});

module.exports = router;