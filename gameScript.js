// Script for the Game //

document.onload = documentoCaricato();

function documentoCaricato() {
    generaGriglia();
}

function generaGriglia() {
    // Genera una griglia 10 x 10
    var elements = "";
    for (var i = 0; i < 10; i++) {
        elements += "<tr>";
        for (var k = 0; k < 10; k++) {
            elements += ("<td><div class=\"buttonGriglia\" id=\"button" + i + "." + k +"\"></div></td>");
        }
        elements += "</tr>";
    }
    document.getElementById("table").innerHTML = elements;
}

function generaNavi() {
    // Funzione per generare le navi nella Griglia
}