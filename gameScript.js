// Script for the Game //

// Global Variables
var matriceNavi;
var turnoGiocatore1 = true;

// Documento caricato
document.onload = documentoCaricato();
function documentoCaricato() {
    document.getElementById("html").style.transition = "2s";
    // Genera Navi
    generaNavi();
    // Genera Griglia
    generaGriglia();
}

function sparaColpo(element) {
    element = element.id;
    if (turnoGiocatore1) {
        document.getElementById("title").textContent = "Giocatore 2";
        document.getElementById(element).style.background = "DarkCyan";
        document.getElementById("html").style.backgroundPosition = "0%, 0%";
        turnoGiocatore1 = false;
    } else {
        document.getElementById("title").textContent = "Giocatore 1";
        document.getElementById(element).style.background = "DarkOrange";
        document.getElementById("html").style.backgroundPosition = "100%, 100%";
        turnoGiocatore1 = true;
    }
}

function generaGriglia() {
    // Genera una griglia 10 x 10
    var elements = "";
    for (var i = 0; i < 10; i++) {
        elements += "<tr>";
        for (var k = 0; k < 10; k++) {
            elements += ("<td><div class=\"buttonGriglia\" id=\"button" + i + "." + k +"\" onclick=\"sparaColpo(this)\"></div></td>");
        }
        elements += "</tr>";
    }
    document.getElementById("table").innerHTML = elements;
}

function generaNavi() {
    //
}