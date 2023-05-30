function lunchBreak(input) {
    let movieName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchDuration = (1 / 8) * breakDuration;
    let leisureDuration = (1 / 4) * breakDuration;

    let totalBusyTime = lunchDuration + leisureDuration;
    let timeLeft = breakDuration - totalBusyTime;

    if (timeLeft >= episodeDuration) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(episodeDuration - timeLeft)} more minutes.`);
    }

}

lunchBreak(["Teen Wolf", "48", "60"]);