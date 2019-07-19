const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("./knexfile"));
let schema = db.schema;



Promise.try(() => {
    schema.hasTable('customer')
        .then(console.log)
        .then((exists) => {
            if(!exists){
                return schema.createTable("customer", (table) => {
                    table.increments('id').primary();
                    table.text('fName');
                    table.text('lName');
                    table.text('email');
                });
             }
        });
}).then((ret)=> {
    if(ret){
        console.log(ret);
    }
    console.log('Done! creating table');
}).catch((err) => {
    console.error(err);
}).finally(() => {
    //db.destroy();
});


// Promise.try(() => {
//     return db('customer').insert([
//         {fName: 'Michael',lName:"Dilernia",email:"mdilernia@gmail.com"},
//         {fName: 'Earl',lName:"Spangenberg",email:"eSpang@gmail.com"}
//     ]);
// }).then(()=> {
//     console.log('Done! adding records');
// }).finally(() => {
//     //db.destroy();
// });

// Promise.try(() => {
//     return db('customer');
// }).then((customer)=> {
//     console.log('All the Customers', customer);
// }).finally(() => {
//     db.destroy();
// });