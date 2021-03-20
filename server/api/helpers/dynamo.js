require('dotenv').config();
const aws = require('aws-sdk');

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS,
    secretAccessKey: process.env.AWS_SECRET,
    region: process.env.AWS_REGION
});

const docClient = new aws.DynamoDB.DocumentClient();

module.exports = {
    docClient,
}