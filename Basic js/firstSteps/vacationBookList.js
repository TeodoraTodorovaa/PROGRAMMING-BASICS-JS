function vacationBookList(input) {
    let pageCount = Number(input[0]);
    let readPageOfOneHour = Number(input[1]);
    let dayCount = Number(input[2]);
    let needTime = pageCount / readPageOfOneHour;
    let needTimeForDay = needTime / dayCount;
    console.log(needTimeForDay);
}

vacationBookList(["212 ", "20 ", "2 "]);