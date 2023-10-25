import Router from "@koa/router";
import Koa from "koa";

export function createApp() {
    const dev = process.env.NODE_ENV !== 'production'

    const server = new Koa({ proxy: !dev })
    const router = new Router()

    router.get('/', ctx => {
        ctx.body = ctx.headers['cf-connecting-ip']
    })
    
    server.use(router.routes())
    return server
}
