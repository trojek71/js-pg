const pg = require('pg');
const R = require('ramda');

const cs = 'postgres://tomek:tomek123@192.168.66.189:5432/js01';

const client = new pg.Client(cs);
client.connect();

client.query('SELECT 1 + 4').then(res => {

    const result = R.head(R.values(R.head(res.rows)));

    console.log(result);
}).finally(() => client.end());