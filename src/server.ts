import Koa from "koa"
import cors from "@koa/cors"
import bodyParser from "koa-bodyparser"
import { createConnection } from "typeorm"
import "reflect-metadata"
import router from "./routes"
import { logger } from "./logger"

const app = new Koa()
createConnection().then(() => {
    app.use(logger())
    app.use(cors())
    app.use(bodyParser())
    app.use(router.routes()).use(router.allowedMethods())
    app.listen(3000)
}).catch((err: string) => {
    console.log("TypeORM error:", err)
})
