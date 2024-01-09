const router = require("express").Router()
const peopleRoute = require("./peopleRoutes")//import the people routing js page
const userRoute = require("./userRoutes")
const sessionRoute = require("./sessionRoutes")

router.use('/people', peopleRoute) //any url beginning in /people will be directed to ./peopleRoutes and then use the request's HTTP method sent
router.use('/user', userRoute)
router.use('/session', sessionRoute)

module.exports = router
