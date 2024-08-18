function calculate() {
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const monthInterest = (interest / 100) / 12;
    const noofPayments = years * 12;

    const x = Math.pow(1 + monthInterest, noofPayments);
    const monthlyPayment = (amount * x * monthInterest) / (x - 1);
    if (isFinite(monthlyPayment)) {
        document.getElementById('month-payment').textContent = monthlyPayment.toFixed(2);
    } else {
        document.getElementById('month-payment').textContent = "Please check your inputs!";
    }
}
