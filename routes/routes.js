const express = require("express")

const router = express.Router()

const controller = require("../controller/UserController")

//API Paths
router.post("/add-user", controller.addUser)
router.get("/get-users",controller.getUsers)
router.get("/get-by-name/:fname",controller.getUserByName)
router.get("/get-name-and-age",controller.getNameAndAge)

router.put("/update-age-by-name/:fname", controller.updateAgeByname)
router.put("/update-inc-age-by-name", controller.updateAgeByName2)

router.delete("/delete-by-name/:fname", controller.deleteByName)

module.exports = router
