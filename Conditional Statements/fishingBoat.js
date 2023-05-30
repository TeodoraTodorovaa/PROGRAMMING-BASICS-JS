function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);

    let discount = 0;

    let finalPrice = 0;


    switch (season) {
        case "Spring": boatPrice = 3000; break;
        case "Summer":
        case "Autumn": boatPrice = 4200; break;
        case "Winter": boatPrice = 2600; break;
    };



    if (fishermanCount <= 6) {
        discount = 0.10;
    } else if (fishermanCount <= 11) {
        discount = 0.15;
    } else {
        discount = 0.25;
    }



    if (fishermanCount % 2 === 0 && season !== "Autumn") {
        discount += 0.05;
    }

    finalPrice = boatPrice - (boatPrice * discount);

    let diff = Math.abs(finalPrice - budget);

    if (budget >= finalPrice) {

        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)

    } else {

        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)

    }

}
fishingBoat(["2000", "Winter", "13"]);