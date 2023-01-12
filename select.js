import options from './mysql.config.js'
import knex from 'knex'

const database = knex(options)

//SELECT ALL
// database.from('cars').select('*')
//     .then(data => {
//         let cars = JSON.parse(JSON.stringify(data))
//         console.log(cars)
//     })
//     .catch(err => console.log(err))
//     .finally(() => database.destroy())

//SELECT FILTRO
// database.from('cars').select('*').where('price', 35000)
//     .then(data => {
//         let cars = JSON.parse(JSON.stringify(data))
//         console.log(cars)
//     })
//     .catch(err => console.log(err))
//     .finally(() => database.destroy())
    
//SELECT & ORDER
database.from('cars').select('*').orderBy('price', 'desc')
.then(data => {
    let cars = JSON.parse(JSON.stringify(data))
    console.log(cars)
})
.catch(err => console.log(err))
.finally(() => database.destroy())