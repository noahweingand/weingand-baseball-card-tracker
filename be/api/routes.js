'use strict';

const controller = require('./controller');

module.exports = function (app) {

    // health
    app.route('/api/_health').get(controller.getHealth);

    // get all cards from db
    app.route('/api/cards').get(controller.getCards);

    // download cards and info as CSV
    app.route('/api/cards/download').get(controller.downloadCards);

    // log card into db
    app.route('/api/cards').post(controller.logCard);

    // delete card from db
    app.route('/api/cards/:cardId').delete(controller.removeCard);
};