function repainting(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);
    let delivery = 2.50;
    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegetarianMenuPrice = vegetarianMenu * 8.15;
    let menusPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
    let dessertPrice = menusPrice * 0.20;
    let totalSum = menusPrice + dessertPrice + delivery;
    console.log(totalSum);
}

repainting(["2 ", "4 ", "3 "]);