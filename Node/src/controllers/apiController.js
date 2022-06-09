const { arrDates, formataDataParaInsertNaDb } = require('../helpers/dates')
const { getNames, getSortedMixedNames } = require('../helpers/getNomes')
const { shuffle } = require('../helpers/util')
const db = require('../db/dbKnex')

class apiController {

    index(req, res){
        res.send({message:'Hello World'})
    }
}

module.exports = new apiController();
