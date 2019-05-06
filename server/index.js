const express = require("express");
const consola = require("consola");
const {
    Nuxt,
    Builder
} = require("nuxt");
const configureApi = require("./modules/index");
const configureDotEnv = require("./dotenv");
const isDev = !(process.env.NODE_ENV === "production");
configureDotEnv();

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.set("port", port);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = isDev;

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }
    configureApi(app);
    // Give nuxt middleware to express
    consola.info('nuxt.render');
    app.use(nuxt.render);;

    // Listen the server
    app.listen(port, host);

    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
}
return start();
