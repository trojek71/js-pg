const mssql = require('mssql');

const cs = 'mssql://sa:!tomek23@192.168.66.189:1433/SynapticNew';

const client = new mssql.Client(cs);

client.connect();

client.query('SELECT * FROM dbo.u=UserInfo').then(res => {

    const fields = res.fields.map(field => field.name);

    console.log(fields);

}).catch(err => {
    console.log(err.stack);
}).finally(() => {
    client.end()
});