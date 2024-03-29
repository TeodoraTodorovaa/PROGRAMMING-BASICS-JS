function areaOfFigures(input) {
    //type square,rectangle,circle or triangle
    let type = input[0];
    let a = Number(input[1]);
    let area = 0;

    if (type === "square") {
        area = a * a;
    } else if (type === "rectangle") {
        let b = Number(input[2]);
        area = a * b;
    } else if (type === "circle") {
        let r = Number(input[1]);
        area = Math.PI * Math.pow(r, 2);
    } else {
        a = Number(input[1]);
        let h = Number(input[2]);
        area = a * h / 2;
    }
    console.log(area.toFixed(3));
}

areaOfFigures(["triangle", "4.5", "20"]);