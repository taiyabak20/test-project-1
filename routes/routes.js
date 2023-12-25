const express = require('express')
const router = express.Router()
const playerControllers = require('../controllers/controllers')

router.post('/',playerControllers.postPlayers)
router.get('/:name', playerControllers.getAllByName)
router.post('/edit/:id', playerControllers.editPlayer)
router.get('/player/:name', playerControllers.getOne)

module.exports = router;