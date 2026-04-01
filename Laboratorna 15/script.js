function printToScreen(text) {
    document.getElementById('output').innerText = text;
}

// 1. Прості числа 0-100
function task1() {
    let r = "Прості числа: ";
    for (let i = 2; i <= 100; i++) {
        if ([...Array(i-2)].every((_, j) => i % (j+2) !== 0)) r += i + " ";
    }
    printToScreen(r);
}

// 2. Числа 0-10
function task2() {
    let r = "";
    for (let n = 0; n <= 10; n++)
        r += n + (n===0 ? " – нуль\n" : n%2===0 ? " – парне\n" : " – непарне\n");
    printToScreen(r);
}

// 3. Ділення 10000 на 2
function task3() {
    let n=10000, c=0;
    while(n>=50){ n/=2; c++; }
    printToScreen("Результат: "+n+"\nІтерацій: "+c);
}

// 4. Пора року і місяць
function task4() {
    let m = parseInt(prompt("Місяць 1-12:"));
    let months=["Січень","Лютий","Березень","Квітень","Травень","Червень",
                "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
    let seasons=["Зима","Зима","Весна","Весна","Весна","Літо","Літо","Літо",
                 "Осінь","Осінь","Осінь","Зима"];
    printToScreen(m>=1 && m<=12 ? seasons[m-1]+", "+months[m-1] : "Некоректне число!");
}

// 5. Цельсій -> Фаренгейт
function task5() {
    let c = parseFloat(prompt("°C:"));
    printToScreen((c*9/5+32).toFixed(2)+" °F");
}

// 6. День тижня
function task6() {
    let d=parseInt(prompt("День 1-7:"));
    let days=["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];
    printToScreen(days[d-1] || "Некоректне число");
}