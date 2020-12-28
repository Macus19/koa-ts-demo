import Router from "@koa/router"

import AuthController from "./controllers/auth"
import UserController from "./controllers/user"

const unprotectedRouter = new Router()

unprotectedRouter.post("/auth/login", AuthController.login)
unprotectedRouter.post("/auth/register", AuthController.register)

const protectedRouter = new Router()

protectedRouter.get("/users", UserController.listUsers)
protectedRouter.get("/users/:id", UserController.showUserDetail)
protectedRouter.put("/user/:id", UserController.updateUser)
protectedRouter.delete("/user/:id", UserController.deleteUser)

export { protectedRouter, unprotectedRouter }