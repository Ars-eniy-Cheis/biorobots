function declination(quantity, declinations) {
    let lastDigit = quantity % 10;
    if (lastDigit >= 2 && lastDigit % 10 <= 4)
        return declinations[1];
    else if (lastDigit % 10 >= 5 || lastDigit % 10 == 0)
        return declinations[2];
    return declinations[0];
}

export default declination;