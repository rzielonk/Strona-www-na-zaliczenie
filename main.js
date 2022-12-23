function przejdzDoZakladki(idZakladki) {
    // Schowaj wszystkie zakładki
    var zakladki = document.querySelectorAll("section");
    for (var i = 0; i < zakladki.length; i++) {
        zakladki[i].style.display = "none";
    }
    // Pokaż wybraną zakładkę
    var zakladka = document.getElementById(idZakladki);
    zakladka.style.display = "block";
}


document.getElementById("formularz").addEventListener("submit", function (event) {
    // Sprawdź, czy wszystkie pola są wypełnione
    var imie = document.getElementById("imie").value;
    var email = document.getElementById("email").value;
    var wiadomosc = document.getElementById("wiadomosc").value;
    if (imie == "" || email == "" || wiadomosc == "") {
        alert("Proszę wypełnić wszystkie pola!");
        event.preventDefault();
    }
});
