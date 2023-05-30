function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let diluent = Number(input[2]);
    let workingHours = Number(input[3]);
    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint + 0.10 * paint) * 14.50;
    let diluentPrice = diluent * 5;
    let bag = 0.40;
    let materialsPrice = nylonPrice + paintPrice + diluentPrice + bag;
    let workmanPrice = (materialsPrice * 0.30) * 8;
    let totalSum = materialsPrice + workmanPrice;
    console.log(totalSum);
}

repainting(["10 ", "11 ", "4 ", "8"]);