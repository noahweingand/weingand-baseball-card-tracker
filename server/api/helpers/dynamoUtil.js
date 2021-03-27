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
    },

    updateCard: async function (params) {
        try {
            const updateParams = {
                TableName: process.env.TABLE_NAME,
                Key: {
                    'id': params.id
                },
                UpdateExpression: "SET brand=:b, card_number=:cn, #fn=:fn, for_sale=:fs, isFabric=:fab, isRefractor=:refrac, #ln=:ln, price=:p, relic=:r, serial_number=:sn, sold_amount=:sa, sport=:sport, team=:t, #yr=:yr, #loc=:l",
                ExpressionAttributeNames: {
                    '#yr': 'year',
                    '#fn': 'first_name',
                    '#ln': 'last_name',
                    '#loc': 'location'
                },
                ExpressionAttributeValues:{
                    ':b': params.brand,
                    ':cn': params.card_number,
                    ':fn': params.first_name,
                    ':fs': params.for_sale,
                    ':fab': params.isFabric,
                    ':refrac': params.isRefractor,
                    ':ln': params.last_name,
                    ':p': params.price,
                    ':r': params.relic,
                    ':sn': params.serial_number,
                    ':sa': params.sold_amount,
                    ':sport': params.sport,
                    ':t': params.team,
                    ':yr': params.year,
                    ':l': params.location
                },
                ReturnValues:"UPDATED_NEW"
            }

            const data = await docClient.update(updateParams).promise();
            console.log(data);
        }
        catch (error) {
            console.log(`Error updating card (id: ${params.id})`);
            console.log(error);
            return undefined;
        }
    }
}

module.exports = dynamoUtil;