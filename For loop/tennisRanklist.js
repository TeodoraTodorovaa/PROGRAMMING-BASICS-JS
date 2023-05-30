function tennisRanklist(input) {
    let tourmentCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let pointsWon = 0;
    let tourmentWon = 0;
    for (let i = 2; i < tourmentCount + 2; i++) {
        let currentResult = input[i];

        if (currentResult === "W") {
            pointsWon += 2000;
            tourmentWon++;
        } else if (currentResult === "F") {
            pointsWon += 1200;
        } else {
            pointsWon += 720;
        }

    }

    let finalPoints = startingPoints + pointsWon;
    console.log(`Final points: ${finalPoints}`);

    let averagePoints = Math.floor(pointsWon / tourmentCount);
    console.log(`Average points: ${averagePoints}`);

    let percentWon = (tourmentWon / tourmentCount) * 100;
    console.log(`${percentWon.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])