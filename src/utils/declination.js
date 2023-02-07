function declination(quantity, declinations) {
    let lastDigit = quantity % 10;
    if (lastDigit >= 2 && lastDigit % 10 <= 4)
        return declinations[1];
    else if (lastDigit % 10 >= 5 || lastDigit % 10 == 0)
        return declinations[2];
    return declinations[0];
}

//Что поступает: 1) Массив с тем сколько есть деталей и монет 2) Массив с тем сколько нужно деталей и монет 3) Массив с названиями деталей
function productionProsperity(detailsQuantity, requiredDetailsQuantity, detailsName) {
    const details = [];

    detailsQuantity.forEach((element, index) => {
        let difference = element - requiredDetailsQuantity[index];
        if (difference < 0) {
            details.push(Math.abs(difference).toString() + ` ${detailsName[index]}`)
        }
    });

    let res = [details.slice(0, details.length - 1).join(', '), details[details.length - 1]].join(' и ');

    return details.length 
            ? "Не хватает " + (details.length == 1 ? details[0] : res)
            : "Всего хватает";
}

export { declination, productionProsperity };

/*

Именительный:
1 монета, 2 монеты, 3 монеты, 4 монеты, 5 монет, 6 монет, 7 монет, 8 монет, 9 монет, 10 монет. 3

Родительный:
1 монеты, 2 монет, 3 монет, 4 монет, 5 монет, 6 монет, 7 монет, 8 монет, 9 монет, 10 монет. 2

Дательный:
1 монете, 2 монетам, 3 монетам, 4 монетам, 5 монетам, 6 монетам, 7 монетам, 8 монетам, 9 монетам, 10 монетам. 2

Винительный:
1 монету, 2 монеты, 3 монеты, 4 монеты, 5 монет, 6 монет, 7 монет, 8 монет, 9 монет, 10 монет. 3

Творительный:
1 монетой, 2 монетами, 3 монетами, 4 монетами, 5 монетами, 6 монетами, 7 монетами, 8 монетами, 9 монетами, 10 монетами. 2

Предложный:
1 монете, 2 монетах, 3 монетах, 4 монетах, 5 монетах, 6 монетах, 7 монетах, 8 монетах, 9 монетах, 10 монетах. 2

*/