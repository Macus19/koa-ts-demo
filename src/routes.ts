import Router from "@koa/router"

import AuthController from "./controllers/auth"
import UserController from "./controllers/user"

const router = new Router()

router.post("/auth/login", AuthController.login)
router.post("/auth/register", AuthController.register)

router.get("/users", UserController.listUsers)
router.get("/users/:id", UserController.showUserDetail)
router.put("/user/:id", UserController.updateUser)
router.delete("/user/:id", UserController.deleteUser)

export default router