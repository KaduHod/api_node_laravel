const randomDate = () => {
    let inicio = new Date(1912, 0, 1).getTime()
    let fim = new Date().getTime()
    return new Date ( inicio + Math.random() * ( fim - inicio))
}

const arrDates = size => {
    cont=0
    arr = [];
    while ( cont < size ) {
        arr.push(  randomDate() )
        cont++
    }

    return arr
}

module.exports = { randomDate, arrDates } 