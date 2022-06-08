const { arrDates, formataDataParaInsertNaDb } = require('../helpers/dates')
const { getNames, getSortedMixedNames } = require('../helpers/getNomes')
const { shuffle } = require('../helpers/util')
const db = require('../db/dbKnex')

class clientsController {

    async createRandomClientsAndInsertIntoDatabase(req, res) {
        const namesList = await getNames()
        const names = getSortedMixedNames(namesList)
        const dates = arrDates(names.length)

        const clients = names.map( (name, index) => ({
            nome: name,
            nascimento: formataDataParaInsertNaDb(dates[index]) 
        }))

        try {
            await db('clients').insert(shuffle(clients))
            return res.send({ success: true, message: 'Random clients genereted and inserted into database!' })
        } catch (error) {
            console.log(error)
            return res.send({ success: false, message: error })
        }
    }

    async clearTableClients(req, res) {
        try {
            await db('clients').del()
            return { success: true, message: 'Table clients cleared!' }
        } catch (error) {
            return { success: false, message: error }
        }
    }

    async getClients(req, res) {
        try {
            let clients = await db('clients')
            return res.send({ success: true, content: clients })
        } catch (error) {
            return res.send({ success: true, message: error })
        }
    }
}

module.exports = new clientsController();
