import options from './mysql.config.js'
import knex from 'knex'

const database = knex(options)

database.from('cars').where('name','Citroen').update({ price: 32000 })
    .then(() => console.log('Updated!'))
    .catch(err => console.log(err))
    .finally(() => database.destroy())