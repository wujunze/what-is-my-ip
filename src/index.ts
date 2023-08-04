import Router from "@koa/router";
import Koa from "koa";

async function serve() {
    const dev = process.env.NODE_ENV !== 'production'

    const server = new Koa({ proxy: !dev })
    const router = new Router()
    router.get('/api/ip', ctx => {
        ctx.body = ctx.ip
    })
    server.use(router.routes())

    const port = 2333
    server.listen(port, () => {
        console.log(`Now listening on: ${port}. Press CTRL+C to shut down.`)
    })
}

serve()