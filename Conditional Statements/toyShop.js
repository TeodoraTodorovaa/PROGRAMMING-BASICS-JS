function toyShop(input) {
    let holidayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalPuzzelPrice = puzzleCount * 2.60;
    let totalDollPrice = dollCount * 3;
    let totalBearPrice = teddyBearCount * 4.10;
    let totalMinionPrice = minionCount * 8.20;
    let totalTruckPrice = truckCount * 2;

    let totalPrice = totalPuzzelPrice + totalDollPrice + totalBearPrice + totalMinionPrice + totalTruckPrice;
    let totalCount = puzzleCount + dollCount + teddyBearCount + minionCount + truckCount;
    if (totalCount >= 50) {
        let discount = 0.25 * totalPrice;
        totalPrice = totalPrice - discount;
    }

    let rent = 0.10 * totalPrice;
    totalPrice = totalPrice - rent;
    if (totalPrice >= holidayPrice) {
        console.log(`Yes! ${(totalPrice - holidayPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(holidayPrice - totalPrice).toFixed(2)} lv needed.`);

    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"]);