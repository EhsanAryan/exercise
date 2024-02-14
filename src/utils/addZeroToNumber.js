const addZeroToNumber = (number) => {
    if(Number.isNaN(Number(number))) return number;
    number = Number(number);
    return number % 10 === number ? `0${number}` : number;
}

export default addZeroToNumber;