
var addNewUser = document.querySelector(".button__send");

addNewUser.addEventListener("click", mainFunction);

function mainFunction(){
    
    if (validation()){
        createTable();
        winRate();
    }
   
}

function validation (){

    var nickName = document.querySelector("#nickNamePlayer").value;
    var server = document.querySelector("#select__server").value;
    var games = document.querySelector("#gamePlayer").value;
    var wins = document.querySelector("#winGames").value;
    var kills = document.querySelector("#killPlayer").value;
    var deaths = document.querySelector("#deathPlayer").value;
    var assist = document.querySelector("#assistPlayer").value;

    if (!nickName) {
       
        alert("Digite seu apelido.");

        return false;

    }else if(!server){

        alert("Selecione um servidor");

        return false;
    }else if (!games){
        
        alert("Selecione um servidor");

    }
    
    return true;
}

function createTable(){

    var rankingTable = document.createElement("tr");
    var nickNameRanking = document.createElement("td");
    var winRateRanking = document.createElement("td");
    var kdaRanking = document.createElement("td");
    var serverRanking = document.createElement("td");
    var ratedRanking = document.createElement("td");
    

   
    rankingTable.appendChild(nickNameRanking);
    rankingTable.appendChild(winRateRanking);
    rankingTable.appendChild(kdaRanking);
    rankingTable.appendChild(serverRanking);
    rankingTable.appendChild(ratedRanking);
    
    
    
    nickNameRanking.textContent = document.querySelector("#nickNamePlayer").value;
    winRateRanking.textContent = winRate() + "%";
    kdaRanking.textContent = calculateKda();
    serverRanking.textContent = document.querySelector("#select__server").value;
    ratedRanking.textContent = playerNature();

    var table = document.querySelector(".container__table");
    table.appendChild(rankingTable);

}
function winRate(){
    var games = document.querySelector("#gamePlayer").value;
    var wins = document.querySelector("#winGames").value;
    var calculateWinRate = (wins/games) * 100;
    return calculateWinRate.toFixed(1);
}

function calculateKda(){

    var kills = document.querySelector("#killPlayer").value;
    var deaths = document.querySelector("#deathPlayer").value;
    var assist = document.querySelector("#assistPlayer").value;

    var kda = (((kills + assist)/deaths));
    return kda.toFixed(1);
}

function playerNature(){

    var honor = document.querySelector("#honorPlayer").value;
    var report = document.querySelector("#reportPlayer").value;


    var positiveResult = (honor / 50)*10;
    var negativeResult = (((report / 50) *10)/2);

    var result = positiveResult - negativeResult;

    return result.toFixed(1);

}