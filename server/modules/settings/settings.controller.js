const settings = {
    apiUrl: process.env.API_URL || "127.0.0.1",
    locale: 'en',
};

const get = (req, res) => {
    res.json(settings)
};

module.exports = {
    get,
    settings // To use in nuxt
};
