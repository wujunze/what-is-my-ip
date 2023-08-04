import type { VercelRequest, VercelResponse } from '@vercel/node';
import Router from "@koa/router";
import Koa from "koa";

function createApp() {
    const dev = process.env.NODE_ENV !== 'production'

    const server = new Koa({ proxy: !dev })
    const router = new Router()

    router.get('/', ctx => {
        ctx.body = ctx.ip
    })
    server.use(router.routes())
    return server
}

function createHandler() {
    const app = createApp()
    const callback = app.callback()
    const handler = (req: VercelRequest, res: VercelResponse) => {
        callback(req, res)
    }
    return handler
}

const handler = createHandler()

export default handler