function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let termDeposit = Number(input[1]);
    let amountInterestRate = Number(input[2]);
    let yearDepositAmount = depositAmount * (amountInterestRate / 100);
    let monthDeposit = yearDepositAmount / 12;
    let total = monthDeposit * termDeposit;
    let totalMoney = total + depositAmount;
    console.log(totalMoney);
}

depositCalculator(["200 ", "3 ", "5.7 "]);