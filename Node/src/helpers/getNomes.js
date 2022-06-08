const axios = require('../apis/axios')
const { juntaNome } = require('./util')
const listaDeNomes = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/'

/**
 * 
 * @returns lista de nomes da api do governo
 */
const getNames = async () => {
  try {
    const {data} = await axios.get(listaDeNomes)
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