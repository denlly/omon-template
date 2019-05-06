const glob = require('glob');
const consola = require("consola");
module.exports = (app) => {
    const modules = glob.sync('./**/*.router.*');
    const keyword = 'modules/';
    modules.forEach(x => {
        const position = x.indexOf(keyword);

        if (position < 0) {
            return;
        }
        const path = './' + x.slice(position + keyword.length);
        require(path)(app);
    });
};
