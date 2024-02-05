const number = document.getElementById("number");
const minus = document.getElementById("minus");
const walletScreen = document.getElementById("walletScren");
const moneyScreen = document.getElementById("moneyScreen");

let myMoney = 0;

moneyScreen.addEventListener('click', () => {

    myMoney = prompt('Сколько у вас средств: ');
    
    const enteredValue = Number(myMoney);
    if (isNaN(enteredValue)) {
        alert("Пожалуйста, введите корректное число.");
        return;
    }

    // Обновление экрана кошелька
    moneyScreen.innerHTML = myMoney;
    walletScreen.innerHTML += `Остаток на счете: ${myMoney}</br>`
});

minus.addEventListener('click', () => {
    // Валидация ввода
    const enteredValue = Number(number.value);
    if (isNaN(enteredValue)) {
        alert("Пожалуйста, введите корректное число.");
        return;
    }

    // Проверка на отрицательный баланс
    if (myMoney - enteredValue < 0) {
        alert("Недостаточно средств.");
        return;
    }

    // Обновление баланса
    myMoney = myMoney - enteredValue;

    // Обновление экрана кошелька
    walletScreen.innerHTML += `-${enteredValue}. Остаток на счете: ${myMoney}<br>`;
    moneyScreen.innerHTML = myMoney;
});
