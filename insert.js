import options from './mysql.config.js'
import knex from 'knex'

const database = knex(options)

const datos = [
    { name: 'Volvo', price: 15000 },
    { name: 'Audi', price: 50000 },
    { name: 'Citroen', price: 35000 },
    { name: 'Skoda', price: 45000 },
]

database('cars').insert(datos)
    .then(() => console.log('Datos insertados'))
    .catch(() => console.log(err))
    .finally(() => database.destroy())

