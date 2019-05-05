const path = require('path');
const nuxtI18n = require('nuxt-i18n');

/**
 * Wrapper for nuxt-i18n that allows to use jsons for locales
 */
module.exports = function (moduleOptions) {
    const options = Object.assign({}, this.options.languages, moduleOptions);
    const locales = options.locales || ['zh-cn'];
    const defaultLocale = options.defaultLocale || locales[0];
    let messages = {};

    locales.forEach(language => messages[language] = require(path.resolve(__dirname, `../locales/${language}.json`)));

    nuxtI18n.call(this, {
        locales: locales.map(language => ({
            code: language
        })),
        defaultLocale: defaultLocale,
        vueI18n: {
            fallbackLocale: defaultLocale,
            messages,
        },
        parsePages: false,
        seo: false,
    });
};
