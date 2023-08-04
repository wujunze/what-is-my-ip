import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createApp } from "./koa"

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