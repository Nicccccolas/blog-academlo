const router = require('express').Router()
const passportJWT =  require('../middleware/auth.middleware')

const userServices = require('./users.services')

router.get('/', passportJWT.authenticate('jwt', {session: false}), userServices.getAllUser)
router.post('/', userServices.postUser)
router.get('/:id', userServices.getUserById)
router.patch('/:id', userServices.patchUser)
router.delete('/:id', userServices.deleteUser)


module.exports = router