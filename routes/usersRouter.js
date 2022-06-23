const express = require ('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json([{
    nombre: 'Jose',
    edad: 26,
    nacionalidad: 'Guatemalteco'
  },
  {
    nombre: 'Miguel',
    edad: 26,
    nacionalidad: 'Guatemalteco'
  }
  ])
});

module.exports = router;
