let nota01html = document.getElementById("nota01html");
let nota01css = document.getElementById("nota01css");
let nota01js = document.getElementById("nota01js");
let resultadonota01 = document.getElementById("resultadonota01");
let nota02html = document.getElementById("nota02html");
let nota02css = document.getElementById("nota02css");
let nota02js = document.getElementById("nota02js");
let resultadonota02 = document.getElementById("resultadonota02");
let nota03html = document.getElementById("nota03html");
let nota03css = document.getElementById("nota03css");
let nota03js = document.getElementById("nota03js");
let resultadonota03 = document.getElementById("resultadonota03");

nota01html.innerHTML = prompt("Nota 01 HTML");
nota01css.innerHTML = prompt("Nota 01 CSS");
nota01js.innerHTML = prompt("Nota 01 JavaScript");
nota02html.innerHTML = prompt("Nota 02 HTML");
nota02css.innerHTML = prompt("Nota 02 CSS");
nota02js.innerHTML = prompt("Nota 02 JavaScript");
nota03html.innerHTML = prompt("Nota 03 HTML");
nota03css.innerHTML = prompt("Nota 03 CSS");
nota03js.innerHTML = prompt("Nota 03 JavaScript");

function calcularPromedio(nota1, nota2, nota3) {
    const suma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
    const promedio = suma / 3;
    return promedio.toFixed(2);
}

const promedio1 = calcularPromedio(nota01html.innerHTML, nota01css.innerHTML, nota01js.innerHTML);
resultadonota01.innerHTML = `El promedio de la nota 1 es: ${promedio1}`;

const promedio2 = calcularPromedio(nota02html.innerHTML, nota02css.innerHTML, nota02js.innerHTML);
resultadonota02.innerHTML = `El promedio de la nota 2 es: ${promedio2}`;

const promedio3 = calcularPromedio(nota03html.innerHTML, nota03css.innerHTML, nota03js.innerHTML);
resultadonota03.innerHTML = `El promedio de la nota 3 es: ${promedio3}`;