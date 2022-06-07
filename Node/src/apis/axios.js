const axios = require('axios').default

const nomesUrl = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/'


const getNomes = async () => {
    let nomes = await axios.get(nomesUrl)
    
    return nomes.data.map(item => item.nome)

}

module.exports = { getNomes }