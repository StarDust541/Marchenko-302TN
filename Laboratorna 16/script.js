document.addEventListener('DOMContentLoaded', () => {

    // 1.1: Картинки
    const images = document.querySelectorAll('.task-img');
    images.forEach(img => {
        img.onclick = function() {
            console.log("Ширина картинки: " + this.getAttribute('width'));
        };
    });

    // 1.2: Посилання
    const links = document.querySelectorAll('.task-link');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.title = this.href;
        });
    });

    // 1.3-1.4: Inputs
    const inputs = document.querySelectorAll('.task-input');
    const demoPara = document.getElementById('demo');

    inputs.forEach(input => {
        let firstClick = true;
        input.addEventListener('click', function() {
            // Вивід у параграф
            demoPara.innerText = "Значення: " + this.value;

            // Перший/повторний клік
            if (firstClick) {
                console.log("Перший клік: " + this.value);
                firstClick = false;
            } else {
                alert("Повторний клік: " + this.value);
            }
        });
    });

    // 1.5: Параграфи з числами
    const numParagraphs = document.querySelectorAll('.num-p');
    numParagraphs.forEach(p => {
        p.onclick = function() {
            let num = parseFloat(this.innerText);
            if (!isNaN(num)) {
                this.innerText = num * num;
            }
        };
    });

    // 2: Чергування кольору
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            this.style.backgroundColor = this.style.backgroundColor === 'red' ? 'green' : 'red';
        });
    });

});