const bisiesto = (year) => {
    if(year % 4 === 0 && (! year % 100 === 0 || year % 400 === 0)){
        return `El año ${year} es bisiesto`;
    }else{
        return `El año ${year} no es bisiesto`;
    }
};

module.exports = { bisiesto };