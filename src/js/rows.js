const pg = require('pg');
const R = require('ramda');

const cs = 'postgres://tomek:tomek123@192.168.66.189:5432/js01';

const client = new pg.Client(cs);

client.connect();

client.query('SELECT * FROM users').then(res => {

    const data = res.rows;

    console.log('all data');
    data.forEach(row => {
        console.log(`Id: ${row.id} Name: ${row.name} Price: ${row.price}`);
    })

    console.log('Sorted prices:');
    const prices = R.pluck('price', R.sortBy(R.prop('price'), data));
    console.log(prices);

}).finally(() => {
    client.end()
});