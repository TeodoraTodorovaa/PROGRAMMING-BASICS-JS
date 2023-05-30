function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let lenght = Number(input[1]);
    let time = Number(input[2]);

    let seconds = lenght * time;
    let delaySeconds = Math.floor(lenght / 15) * 12.5;
    let totalSeconds = seconds + delaySeconds;
    let neededSeconds = totalSeconds - record;


    if (record > totalSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalSeconds.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${neededSeconds.toFixed(2)} seconds slower.`)

    }
}

worldSwimmingRecord(["10464",

    "1500",

    "20"]);