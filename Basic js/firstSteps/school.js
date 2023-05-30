function school(input) {
    let pens = input[0];
    let markers = input[1];
    let cleaningAgents = input[2];
    let discountPercentages = input[3];
    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let cleaningAgentsPrice = cleaningAgents * 1.20;
    let total = pensPrice + markersPrice + cleaningAgentsPrice;
    let totalWithDiscount = total - (total * (discountPercentages / 100));
    console.log(totalWithDiscount);
}

school(["4 ", "2 ", "5 ", "13 "]);