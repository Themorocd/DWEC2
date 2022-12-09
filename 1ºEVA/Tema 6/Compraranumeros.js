window.onload = iniciar;

let x = 0;
let y = 0;
let repite = 0;

function iniciar() {

    document.getElementById("genera").addEventListener("click", generar);
    document.getElementById("compara").addEventListener("click", comparar);

}

function generar() {

    if (repite > 0) {

        document.getElementById("primero").removeChild(document.getElementById("x1"));
        document.getElementById("segundo").removeChild(document.getElementById("y1"));

    }

    repite++;

    x = Math.floor(Math.random() * 100);
    let linea1 = document.createElement("p");
    linea1.setAttribute("id", "x1");
    let caja1 = document.getElementById("primero");

    let valorx = document.createTextNode(x);
    linea1.appendChild(valorx);
    caja1.appendChild(linea1);

    y = Math.floor(Math.random() * 100);
    let linea2 = document.createElement("p");
    linea2.setAttribute("id", "y1");
    let caja2 = document.getElementById("segundo");

    let valory = document.createTextNode(y);
    linea2.appendChild(valory);
    caja2.appendChild(linea2);



}

function comparar() {

    document.getElementById("resultado").innerHTML = "";


    if (x > y) {
        document.getElementById("x1").innerHTML = "";

        let linea3 = document.createElement("p");
        let caja3 = document.getElementById("resultado");

        let x3 = document.createTextNode(x);
        linea3.appendChild(x3);
        caja3.appendChild(linea3);

    } else {
        document.getElementById("y1").innerHTML = "";

        let linea3 = document.createElement("p");
        let caja3 = document.getElementById("resultado");

        let x3 = document.createTextNode(y);
        linea3.appendChild(x3);
        caja3.appendChild(linea3);
    }

}