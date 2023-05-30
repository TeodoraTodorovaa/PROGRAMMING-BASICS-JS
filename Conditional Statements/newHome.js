function newHome(input) {

    let flowers = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;


    switch (flowers) {
        case "Roses": {
            price = quantity * 5;
            if (quantity > 80) {
                price *= 0.9;
            }
        }; break;

        case "Dahlias": {
            price = quantity * 3.8;
            if (quantity > 90) {
                price *= 0.85;
            }
        }; break;
        case "Tulips": {
            price = quantity * 2.8;
            if (quantity > 80) {
                price *= 0.85;
            }
        }; break;
        case "Narcissus": {
            price = quantity * 3;
            if (quantity < 120) {
                price *= 1.15;
            }
        }; break;
        case "Gladiolus": {
            price = quantity * 2.5;
            if (quantity < 80) {
                price *= 1.2;
            }
        }; break;
    }
    let diff = Math.abs(price - budget);

    if (price > budget) {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    } else {
        console.log(`Hey, you have a great garden with ${quantity} ${flowers} and ${diff.toFixed(2)} leva left.`)
    }


}
newHome(["Tulips",

    "88",

    "260"]);