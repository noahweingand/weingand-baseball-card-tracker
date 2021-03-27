const { docClient } = require('./dynamo');
const { v4: uuidv4 } = require('uuid');

var dynamoUtil = {
    getAllCards: async function() {
        try {

            const searchParams = {
                TableName: process.env.TABLE_NAME,
            }
        
            const { Items } = await docClient.scan(searchParams).promise();
            
            return Items;
        }

        catch (error) {
            console.log("Error getting all cards from db");
            console.log(error);
            return undefined;
        }
    },

    insertCard: async function (params) {
        try {
            const insertParams = {
                TableName: process.env.TABLE_NAME,
                Item: {
                    'id': uuidv4(),
                    'brand': params.brand,
                    'card_number': params.card_number,
                    'first_name': params.first_name,
                    'isFabric': params.isFabric,
                    'isRefractor': params.isRefractor,
                    'last_name': params.last_name,
                    'relic': params.relic,
                    'serial_number': params.serial_number,
                    'sport': params.sport,
                    'team': params.team,
                    'year': params.year,
                    'for_sale': params.for_sale,
                    'price': params.price,
                    'sold_amount': params.sold_amount,
                    'location': params.location
                }
            }

            await docClient.put(insertParams).promise();
        }
        catch (error) {
            console.log("Error inserting card into db");
            console.log(error);
            return undefined;
        }
    },

    deleteCard: async function (cardId) {
        try {
            const deleteParams = {
                TableName: process.env.TABLE_NAME,
                Key: {
                    'id': cardId
                }
            }

            await docClient.delete(deleteParams).promise();
        }
        catch (error) {
            console.log("Error deleting card from db");
            console.log(error);
            return undefined;
        }
    }
}

module.exports = dynamoUtil;