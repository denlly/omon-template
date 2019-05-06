const controller = require('./member.controller');

const routes = {
    get: '/api/members'
};

module.exports = server => {
    server.get(routes.get, controller.get);
};
