const express = require('express')
const router = express.Router()
const playerControllers = require('../controllers/controllers')

router.post('/',playerControllers.postPlayers)
router.get('/:name', playerControllers.getOne)
router.post('/edit/:id', playerControllers.editPlayer)

module.exports = router;