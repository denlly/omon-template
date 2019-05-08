
const head = {
    title: "name",
    meta: [{
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
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
    }]
};
const axios = {
    host: '',
    port: 3000,
    prefix: '/api',
    retry: {
        retries: 3
    },
    https: false,
    credentials: true,
    debug: false,
    progress: false,
},
const modules = ["@nuxtjs/axios", "~/modules/i18n-json"];
// export default {
module.exports = {
    mode: 'universal',
    srcDir: "./client",
    env: {},
    head,
    loading: {
        color: "#3B8070"
    },
    css: ["~/assets/styles/global.scss"],
    build: {},
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
};
