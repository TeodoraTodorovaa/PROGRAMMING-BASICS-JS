function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let place = "";
    let vacationPrice = 0;


    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            vacationPrice = budget * 0.30;
            place = "Camp";
        } else {
            vacationPrice = budget * 0.70;
            place = "Hotel";
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            vacationPrice = budget * 0.40;
            place = "Camp";
        } else {
            vacationPrice = budget * 0.80;
            place = "Hotel";
        }
    } else {
        destination = "Europe";
        vacationPrice = budget * 0.90;
        place = "Hotel";
    }



    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${vacationPrice.toFixed(2)}`);

}

journey(["1500", "summer"]);