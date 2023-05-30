function hotelRoom(input) {


    let month = input[0];
    let nights = Number(input[1]);

    let priceStudio = 0;
    let priceApartment = 0;

    if (month === "May" || month === "October") {
        priceStudio = 50;
        priceApartment = 65;
        if (nights > 7 && nights < 14) {
            priceStudio *= 0.95;
        } else if (nights > 14) {
            priceStudio *= 0.70;
            priceApartment *= 0.90;
        }
    } else if (month === "June" || month === "September") {
        priceStudio = 75.20;
        priceApartment = 68.70;
        if (nights > 14) {
            priceStudio *= 0.80;
            priceApartment *= 0.90;
        }
    } else if (month === "July" || month === "August") {
        priceStudio = 76;
        priceApartment = 77;
        if (nights > 14) {
            priceApartment *= 0.90;
        }
    }

    priceApartment = priceApartment * nights;
    priceStudio = priceStudio * nights;

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}

hotelRoom(["August", "20"]);