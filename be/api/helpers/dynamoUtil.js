const { docClient } = require('./dynamo');

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
    }
}

module.exports = dynamoUtil;