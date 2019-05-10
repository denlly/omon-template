const head = {
    title: "name",
    meta: [
        {
            charset: "utf-8"
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        },
        {
            hid: "description",
            name: "description",
            content: "description"
        }
    ],
    link: [
        {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico"
        },
        { rel: "stylesheet", name: "iview", href: "/iview.css" },
        {
            rel: "stylesheet",
            href: "/fontawesome/5.0.13/fontawesome-all.min.css?20180920"
        }
    ]
};
const axios = {
    host: "",
    port: 3000,
    prefix: "/api",
    retry: {
        retries: 3
    },
    https: false,
    credentials: true,
    debug: false,
    progress: false
};
const modules = ["@nuxtjs/axios", "~/modules/i18n-json"];
const build = {
    extend(config, { isDev, isClient }) {
        if (isDev && isClient) {
            config.module.rules.push({
                enforce: "pre",
                test: /\.(ts|vue)$/,
                loader: "tslint-loader",
                exclude: /(node_modules)/
            });
        }
    }
};

// export default {
module.exports = {
    mode: "universal",
    srcDir: "./client",
    env: {},
    head,
    loading: {
        color: "#3B8070"
    },
    css: [
        {
            src: "iview/dist/styles/iview.css"
        },
        "~/assets/styles/global.scss"
    ],
    build,
    modules,
    axios,
    render: {
        // production use 9 level
        gzip: {
            threshold: 9
        }
    },
    // use nuxt-axios ，plugin fetch invalid
    // plugins: ['~/plugins/fetch/index.ts']
    plugins: [{ src: "~/plugins/nuxt-iview.ts", ssr: true }],
    // [TODO:follow https://shelter.lancercomet.com/2018/02/06/nuxt-with-ts-setup/]
    vendor: ["babel-polyfill", "eventsource-polyfill", "iview", "./plugins/nuxt-iview.js"]
};
