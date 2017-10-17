var random = (function random() {
    "use strict";

    var btn, content, stored, simploniens = [
        "Haroon",
        "Kader",
        "Othman",
        "Sabuj",
        "Fatim",
        "Richard",
        "Adam",
        "Cédric",
        "Nathalie",
        "Quentin",
        "Elias",
        "Mohammed",
        "Denis",
        "Bernard",
        "Sophie",
        "Laetitia",
    ];

    window.onload = function start() {

        btn = document.getElementById("random");
        content = document.getElementById("content");
        // stored = getLocalStorage();

        // console.log(stored);
        //
        // if (!stored) { // si stored est null
        //     // on créé un store de données (array vide)
        //     initLocalStorage();
        //     stored = getLocalStorage();
        //
        // }
        // console.log(stored);
        // console.log(stored.length);
        // console.log(stored[0]);
        btn.onclick = vote;
    };

    function initLocalStorage() {
        localStorage.setItem("simploniens", JSON.stringify([]));
    }

    function addLocalStorage(simplonien) {
        // stored.push(simplonien);
        return localStorage.setItem("simploniens", simplonien);
    }

    function getLocalStorage() {
        return JSON.parse(localStorage.getItem("simploniens"));
    }

    function compare() {

    }

    function vote() {
        var key = Math.floor(getRandomArbitrary(0, simploniens.length - 1));
        content.textContent = "And ze winner is.... " + simploniens[key];
        // addLocalStorage(simploniens[key]);
        simploniens.splice(key, 1);
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

}());
