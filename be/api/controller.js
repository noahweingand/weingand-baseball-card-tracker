'use strict';

//require('dotenv').config();
var { DateTime } = require('luxon');
const dynamoUtil = require('./helpers/dynamoUtil');
const csvUtil = require('./helpers/csvUtil');
const { docClient } = require('./helpers/dynamo');

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
            console.log("Attempting to get all cards and info");

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
    },

    logCard: async function (req, res) {
        try {
            console.log("Attempting to insert a card");

            const params = req.body;

            await dynamoUtil.insertCard(params);

            res.status(200).send({
                status: 200,
                message: "Card successfully logged!"
            });

        }
        catch (error) {
            console.log("Error on loggin a card");
            console.log(error);
            res.status(500).send({
                status: 500,
                message: "Card not logged!"
            });
        }
    },

    removeCard: async function (req, res) {
        try {
            console.log("Attempting to remove card from db");

            const cardId = req.params.cardId;
            console.log("Card Id being removed: " + cardId);

            await dynamoUtil.deleteCard(cardId);

            res.status(200).send({
                status: 200,
                message: "Card successfully deleted!"
            })
        }
        catch (error) {
            console.log("Error on deleting  card");
            res.status(500).send({
                status: 500,
                message: "Card not deleted!"
            })
        }
    }
};

module.exports = controllers;