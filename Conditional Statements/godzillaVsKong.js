function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let statics = Number(input[1]);
    let priceForClothsPerStatics = Number(input[2]);
    let sumForClothes = statics * priceForClothsPerStatics;
    let decor = movieBudget * 0.10;

    if (statics > 150) {
        sumForClothes *= 0.90;
    }

    let totalSum = sumForClothes + decor;
    let moneyLeft = movieBudget - totalSum;

    if (totalSum > movieBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSum - movieBudget).toFixed(2)} leva more.`);
    } else if (totalSum <= movieBudget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(moneyLeft).toFixed(2)} leva left.`);
    }

}

godzillaVsKong(["9587.88",

    "222",

    "55.68"]);