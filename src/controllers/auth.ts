import { Context } from "koa"

export default class AuthController {
    public static async login(ctx:Context) {
        ctx.body = "Login Controller"
    }

    public static async register(cxt:Context) {
        cxt.body = "Register Controller"
    }
}