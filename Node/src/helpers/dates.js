const randomDate = () => {
    let inicio = new Date(1912, 0, 1).getTime()
    let fim = new Date().getTime()
    return new Date ( inicio + Math.random() * ( fim - inicio ))
}

function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}


const arrDates = size => {
    let cont=0
    const arr = [];
    while ( cont < size ) {
        arr.push(  getRandomDate() )
        cont++
    }

    return arr
}


/**
 * 
 * @param {*} date em string
 * @returns data validada com timestamp
 */
const validateDateWithTimestamp = date => new Date(Date.parse(date))

module.exports = { randomDate, arrDates, validateDateWithTimestamp } 