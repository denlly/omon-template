const modules = ["@nuxtjs/axios", "~/modules/i18n-json"];
// export default {
module.exports = {
    mode: 'universal',
    srcDir: "./client",
    env: {},
    head: {
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
    },
    loading: {
        color: "#3B8070"
    },
    css: ["~/assets/styles/global.scss"],
    build: {},
    modules,
    axios: {}
};
