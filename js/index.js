let settingsView;
let gameView;
let scoreView;
let current;
let Spielmodus;

window.onload = function() {

    settingsView = document.getElementById("settings-view");
    gameView = document.getElementById("game-view");
    scoreView = document.getElementById("score-view");
    Spielmodus = document.getElementById("Spielmodus");

    switchView("Spielmodus");
};

function switchView(targetViewId) {
    settingsView.style.display = "none";
    gameView.style.display = "none";
    scoreView.style.display = "none";

    if (targetViewId === "Spielmodus"){
        Spielmodus.style.display === "block";
    }else if (targetViewId === "settings-view") {
        settingsView.style.display = "initial";
        Spielmodus.style.display = "none";
    }else if (targetViewId === "game-view") {
        gameView.style.display = "initial";
        Spielmodus.style.display = "none";
    }
}