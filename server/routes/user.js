import express from 'express'
const router = express.Router();

import { postSignup, getSignin } from'../controller/user.js'


console.log("start")
router.post("/signup", postSignup)
router.post("/login",  getSignin )


export default router



