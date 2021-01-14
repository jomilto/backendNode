const bisiesto = (year) => {

    // var bisiestos = [];
    // for(let i = year; i >= 1580; i--){
    //     if(i % 4 === 0 && (! i % 100 === 0 || i % 400 === 0)){
    //         bisiestos.push(i);
    //     }
    // }
    // return bisiestos;

    if(year % 4 === 0 && (! year % 100 === 0 || year % 400 === 0)){
        return `El año ${year} es bisiesto`;
    }else{
        return `El año ${year} no es bisiesto`;
    }
};

module.exports = { bisiesto };