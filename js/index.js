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

function selectGamemode(gamemode){
    if(gamemode=='Normal'){
        let hunderter = document.createTextNode("100");
        let zweihunderter = document.createTextNode("200");
        let dreihunderter = document.createTextNode("300");
        let vierhunderter = document.createTextNode("400");
        let fünfhunderter = document.createTextNode("500");
        let hunderterText = document.createElement("p");
        let hText = hunderterText.appendChild(hunderter)
        document.getElementById("Box11").appendChild(hText);
    }else{

    }
}

function selectQuestion(questionId){
    const Box = document.getElementById("Fragebox");
    while (Box.hasChildNodes()){
        Box.removeChild(Box.children[0]);
    }
    const Frage = document.createElement("p");
    var Question;
    var Done;
    if(questionId=='q11'){
        Question = document.createTextNode(config.Fragen.q11.Frage);
        Done = document.getElementById("Box11");
    }
    if(questionId=='q12'){
        Question = document.createTextNode(config.Fragen.q12.Frage);
        Done = document.getElementById("Box12");
    }
    if(questionId=='q13'){
        Question = document.createTextNode(config.Fragen.q13.Frage);
        Done = document.getElementById("Box13");
    }
    if(questionId=='q14'){
        Question = document.createTextNode(config.Fragen.q14.Frage);
        Done = document.getElementById("Box14");
    }
    if(questionId=='q15'){
        Question = document.createTextNode(config.Fragen.q15.Frage);
        Done = document.getElementById("Box15");
    }
    if(questionId=='q21'){
        Question = document.createTextNode(config.Fragen.q21.Frage);
        Done = document.getElementById("Box21");
    }
    if(questionId=='q22'){
        Question = document.createTextNode(config.Fragen.q22.Frage);
        Done = document.getElementById("Box22");
    }
    if(questionId=='q23'){
        Question = document.createTextNode(config.Fragen.q23.Frage);
        Done = document.getElementById("Box23");
    }
    if(questionId=='q24'){
        Question = document.createTextNode(config.Fragen.q24.Frage);
        Done = document.getElementById("Box24");
    }
    if(questionId=='q25'){
        Question = document.createTextNode(config.Fragen.q25.Frage);        
        Done = document.getElementById("Box25");
    }
    if(questionId=='q31'){
        Question = document.createTextNode(config.Fragen.q31.Frage);
        Done = document.getElementById("Box31");
    }
    if(questionId=='q32'){
        Question = document.createTextNode(config.Fragen.q32.Frage);
        Done = document.getElementById("Box32");
    }
    if(questionId=='q33'){
        Question = document.createTextNode(config.Fragen.q33.Frage);
        Done = document.getElementById("Box33");
    }
    if(questionId=='q34'){
        Question = document.createTextNode(config.Fragen.q34.Frage);
        Done = document.getElementById("Box34");
    }
    if(questionId=='q35'){
        Question = document.createTextNode(config.Fragen.q35.Frage);
        Done = document.getElementById("Box35");
    }
    if(questionId=='q41'){
        Question = document.createTextNode(config.Fragen.q41.Frage);
        Done = document.getElementById("Box41");
    }
    if(questionId=='q42'){
        Question = document.createTextNode(config.Fragen.q42.Frage);
        Done = document.getElementById("Box42");
    }
    if(questionId=='q43'){
        Question = document.createTextNode(config.Fragen.q43.Frage);
        Done = document.getElementById("Box43");
    }
    if(questionId=='q44'){
        Question = document.createTextNode(config.Fragen.q44.Frage);
        Done = document.getElementById("Box44");
    }
    if(questionId=='q45'){
        Question = document.createTextNode(config.Fragen.q45.Frage);
        Done = document.getElementById("Box45");
    }
    if(questionId=='q51'){
        Question = document.createTextNode(config.Fragen.q51.Frage);
        Done = document.getElementById("Box51");
    }
    if(questionId=='q52'){
        Question = document.createTextNode(config.Fragen.q52.Frage);
        Done = document.getElementById("Box52");
    }
    if(questionId=='q53'){
        Question = document.createTextNode(config.Fragen.q53.Frage);
        Done = document.getElementById("Box53");
    }
    if(questionId=='q54'){
        Question = document.createTextNode(config.Fragen.q54.Frage);
        Done = document.getElementById("Box54");
    }
    if(questionId=='q55'){
        Question = document.createTextNode(config.Fragen.q55.Frage);
        Done = document.getElementById("Box55");
    }
    Done.style.visibility="hidden";
    Frage.appendChild(Question);
    Box.insertAdjacentElement("beforeend",Frage);
    switchView("game-view");
    current=questionId;
}

function ShowAnswer(){
    const Box = document.getElementById("Fragebox");
    while (Box.hasChildNodes()){
        Box.removeChild(Box.children[0]);
    }
    var Answer;
    if(current=='q11'){
        Answer = document.createTextNode(config.Fragen.q11.Antwort);
    }
    if(current=='q12'){
        Answer = document.createTextNode(config.Fragen.q12.Antwort);
    }
    if(current=='q13'){
        Answer = document.createTextNode(config.Fragen.q13.Antwort);
    }
    if(current=='q14'){
        Answer = document.createTextNode(config.Fragen.q14.Antwort);
    }
    if(current=='q15'){
        Answer = document.createTextNode(config.Fragen.q15.Antwort);
    }
    if(current=='q21'){
        Answer = document.createTextNode(config.Fragen.q21.Antwort);
    }
    if(current=='q22'){
        Answer = document.createTextNode(config.Fragen.q22.Antwort);
    }
    if(current=='q23'){
        Answer = document.createTextNode(config.Fragen.q23.Antwort);
    }
    if(current=='q24'){
        Answer = document.createTextNode(config.Fragen.q24.Antwort);
    }
    if(current=='q25'){
        Answer = document.createTextNode(config.Fragen.q25.Antwort);
    }
    if(current=='q31'){
        Answer = document.createTextNode(config.Fragen.q31.Antwort);
    }
    if(current=='q32'){
        Answer = document.createTextNode(config.Fragen.q32.Antwort);
    }
    if(current=='q33'){
        Answer = document.createTextNode(config.Fragen.q33.Antwort);
    }
    if(current=='q34'){
        Answer = document.createTextNode(config.Fragen.q34.Antwort);
    }
    if(current=='q35'){
        Answer = document.createTextNode(config.Fragen.q35.Antwort);
    }
    if(current=='q41'){
        Answer = document.createTextNode(config.Fragen.q41.Antwort);
    }
    if(current=='q42'){
        Answer = document.createTextNode(config.Fragen.q42.Antwort);
    }
    if(current=='q43'){
        Answer = document.createTextNode(config.Fragen.q43.Antwort);
    }
    if(current=='q44'){
        Answer = document.createTextNode(config.Fragen.q44.Antwort);
    }
    if(current=='q45'){
        Answer = document.createTextNode(config.Fragen.q45.Antwort);
    }
    if(current=='q51'){
        Answer = document.createTextNode(config.Fragen.q51.Antwort);
    }
    if(current=='q52'){
        Answer = document.createTextNode(config.Fragen.q52.Antwort);
    }
    if(current=='q53'){
        Answer = document.createTextNode(config.Fragen.q53.Antwort);
    }
    if(current=='q54'){
        Answer = document.createTextNode(config.Fragen.q54.Antwort);
    }
    if(current=='q55'){
        Answer = document.createTextNode(config.Fragen.q55.Antwort);
    }
    const Frage = document.createElement("p")
    Frage.appendChild(Answer);
    Box.insertAdjacentElement("beforeend",Frage);
}