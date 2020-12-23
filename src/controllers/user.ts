import { Context } from "koa"
import { getManager } from "typeorm"
import { User } from "../entity/user"

export default class UserController {
    public static async listUsers(ctx: Context) {
        const userRepository = getManager().getRepository(User)
    }

    public static async showUserDetail(ctx: Context) {
        ctx.body = `ShowUserDetail controller with ID = ${ctx.params.id}`
    }

    public static async updateUser(ctx: Context) {
        ctx.body = `UpdateUser controller with ID = ${ctx.params.id}`
    }

    public static async deleteUser(ctx: Context) {
        ctx.body = `DeleteUser controller with ID = ${ctx.params.id}`
    }
}