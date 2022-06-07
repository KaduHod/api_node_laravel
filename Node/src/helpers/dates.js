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
    cont=0
    arr = [];
    while ( cont < size ) {
        arr.push(  getRandomDate() )
        cont++
    }

    return arr
}

const formataDataParaInsertNaDb = data => {

    let dia =  data.getDate() < 10 ? '0' + data.getDate() :  data.getDate()
    let mes =  data.getMonth() < 10 ? '0' + data.getMonth():  data.getMonth()

    dia = dia === '00' ? '01' : dia
    mes = mes === '00' ? '01' : mes

    return `${data.getFullYear()}-${mes}-${dia}`
}

module.exports = { randomDate, arrDates, formataDataParaInsertNaDb } 