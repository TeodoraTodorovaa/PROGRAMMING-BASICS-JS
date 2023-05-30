function shopping(input) {
    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let gpuPrice = 250;


    let totalgpuPrice = gpu * gpuPrice;
    let cpuPrice = totalgpuPrice * 0.35;
    let ramPrice = totalgpuPrice * 0.10;

    let totalcpuPrice = cpu * cpuPrice;
    let totalramPrice = ram * ramPrice;

    let totalPrice = totalgpuPrice + totalcpuPrice + totalramPrice;

    if (gpu > cpu) {
        totalPrice *= 0.85;
    }

    if (totalPrice <= budget) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }

}

shopping(["920.45",

    "3",

    "1",

    "1"]);