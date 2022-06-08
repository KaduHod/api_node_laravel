const axios = require('./axios')
const { juntaNome } = require('../helpers/util')
const nomesUrl = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/'


const getNames = async () => {
  try {
    let {data} = await axios.get(nomesUrl)
    return data.map(item => item.nome)
  } catch (error) {
    console.log(error)
  } 
}


/**
 * @param {*} array with names
 */
const getSortedMixedNames = namesList => {
  let cont = 0;
  let arrNames = [];

  while (cont < namesList.length){
    for(let index = 0; index<namesList.length; index++){
      if(index !== cont){
        let newName = juntaNome([namesList[cont], namesList[index]])
        arrNames.push(newName)
      }
    }
    cont++
  }


  return arrNames
}

module.exports = { getNames, getSortedMixedNames }