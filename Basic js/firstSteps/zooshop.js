function zooshop(input) {
    let dogFoodPackage = Number(input[0]);
    let catFoodPackage = Number(input[1]);
    let dogFoodSum = dogFoodPackage * 2.50;
    let catFoodSum = catFoodPackage * 4;
    let totalSum = dogFoodSum + catFoodSum;
    console.log(`${totalSum} lv`);
}

zooshop(["5", "4"]);