const { getNames, getSortedMixedNames } = require('../helpers/getNomes')
const { arrDates, formataDataParaInsertNaDb } = require('../helpers/dates')
const { shuffle } = require('../helpers/util')
const db = require('../db/dbKnex')

class clientsController {

    async createRandomClientsAndInsertIntoDb () {
        let namesList = await getNames()
        let names     = getSortedMixedNames(namesList)
        let dates     = arrDates(names.length)

        let clients = names.reduce( (acc, curr, index) => {

            let client = { nome : curr,  nascimento : formataDataParaInsertNaDb(dates[index]) }

            acc.push( client )

            return acc

        }, [])

        try {
            await db('clients').insert(shuffle(clients))
            return { Success: true, message: 'Random clients genereted and inserted into database!' }
        } catch (error) {
            console.log(error)
            return { Success: false, message: error }
        }
    }


    async clearTableClients () {
        try {

            await db('clients').del()

            return { Success: true, message: 'Table clients cleared!' }

        } catch (error) {
            return { Success: false, message: error }

        }
    }
}

module.exports = new clientsController();
