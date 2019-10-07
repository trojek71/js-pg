const pg = require('pg');

const cs = 'postgres://tomek:tomek123@192.168.66.189:5432/js01';

const client = new pg.Client(cs);

client.connect();

client.query('SELECT * FROM user').then(res => {

    const fields = res.fields.map(field => field.name);

    console.log(fields);

}).catch(err => {
    console.log(err.stack);
}).finally(() => {
    client.end()
});