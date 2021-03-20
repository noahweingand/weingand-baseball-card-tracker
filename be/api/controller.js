'use strict';

//require('dotenv').config();
var { DateTime } = require('luxon');
const dynamoUtil = require('./helpers/dynamoUtil');
const csvUtil = require('./helpers/csvUtil');

async function getServerHealth() {
    return "Server is up and running";
}

var controllers = {
    getHealth: async function(req, res) {
        try {
            console.log("starting health call");
            res.status(200).send({
                status: 200,
                message: await getServerHealth()
            });
        }
        catch (error) {
            console.log("error on health call");
            res.send(error);
        }
    },

    getCards: async function (req, res) {
        try {
            console.log("Attempting to get all cards from db");

            const data = await dynamoUtil.getAllCards();
            
            res.send(data);
        }
        catch (error) {
            console.log("Cannot GET cards");
            console.log(error);
            res.send(error);
        }
    },

    downloadCards: async function (req, res) {
        try {
            console.log("Attempting to get all cards from db");

            const data = await dynamoUtil.getAllCards();

            const csv = csvUtil.getCSV(data);

            const dateTime = DateTime.now().toString();

            res.header('Content-Type', 'text/csv');
            res.attachment(`cc_cards_${dateTime}.csv`);
            res.send(csv);
        }
        catch (error) {
            console.log("Cannot GET cards");
            console.log(error);
            res.send(error);
        }
    }
};

module.exports = controllers;