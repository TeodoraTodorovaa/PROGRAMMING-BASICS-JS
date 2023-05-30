function greenYard(input) {
    let squarMeters = input[0];
    let price = squarMeters * 7.61;
    let discount = price - (price * 0.18);
    let finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice}lv. The discount is: ${discount} lv.`);
}

greenYard(["550"]);