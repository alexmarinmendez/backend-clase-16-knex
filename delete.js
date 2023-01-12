import options from './mysql.config.js'
import knex from 'knex'

const database = knex(options)

database.from('cars').where('price', '>', 30000).del()
    .then(() => console.log('Done!!'))
    .catch(err => console.log(err))
    .finally(() => database.destroy())