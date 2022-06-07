const juntaNome = nomes => {
    return `${nomes[0]} ${nomes[1]}`
}

/**
 * 
 * @param {*} array 
 * @returns retorna array com indices ordenados de forma diferente
 */
const shuffle = array => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

module.exports = { juntaNome, shuffle }