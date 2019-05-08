const localRandomData = require("../../../client/static/random-data.json")
const get = (req, res) => {
    res.json(localRandomData)
};

module.exports = {
    get
};
