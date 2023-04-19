import { Router } from 'express'
import * as controller from '../controller/user.js'
import { isAuthenticated  } from '../utils/auth.js'

const router = Router()

router.route('/register').post(controller.register)
router.route('/login').post(controller.login)

router.route('/logout').get(isAuthenticated, controller.logout)

router.route("/meet").get(isAuthenticated, controller.meeting)

router.route('/user/:username').get((req, res) => res.json("ye wala") )


export default router