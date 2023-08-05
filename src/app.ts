import { createApp } from ".";

const app = createApp()
const port = 3000;
app.listen(port, () => {
    console.log(`Now listening on: ${port}. Press CTRL+C to shut down.`)
});