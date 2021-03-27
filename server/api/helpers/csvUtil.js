const { Parser } = require('json2csv');

const fields = [
    {
        label: 'ID',
        value: 'id'
    },
    {
        label: 'Brand',
        value: 'brand'
    },
    {
        label: 'Card Number',
        value: 'card_number'
    },
    {
        label: 'First Name',
        value: 'first_name'
    },
    {
        label: 'Fabric',
        value: 'isFabric'
    },
    {
        label: 'Refractor',
        value: 'isRefractor'
    },
    {
        label: 'Last Name',
        value: 'last_name'
    },
    {
        label: 'Relic',
        value: 'relic'
    },
    {
        label: 'Serial Number',
        value: 'serial_number'
    },
    {
        label: 'Sport',
        value: 'sport'
    },
    {
        label: 'Team',
        value: 'team'
    },
    {
        label: 'Year',
        value: 'year'
    },
    {
        label: 'For Sale',
        value: 'for_sale'
    },
    {
        label: 'Price',
        value: 'price'
    },
    {
        label: 'Sold Amount',
        value: 'sold_amount'
    },
    {
        label: 'Location',
        value: 'location'
    }
]

var csvUtil = {
    getCSV: function (data) {
        const json2csv = new Parser({ fields });
        const csv = json2csv.parse(data);
    
        return csv;
    }
}

module.exports = csvUtil;