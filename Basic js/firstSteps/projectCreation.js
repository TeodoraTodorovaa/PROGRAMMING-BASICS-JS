function projectCreation(input) {
    let name = input[0];
    let countProject = Number(input[1]);
    let needTime = countProject * 3;
    console.log(`The architect ${name} will need ${needTime} hours to complete ${countProject} project/s.`);
}

projectCreation(["George ", "4 "]);