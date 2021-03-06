





// write to DOM function 
const writeToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};


// failed function

function nope () {
    console.log("nope that didn't work");
}

// xhr function

function xhrFighter1 () {
    const data1 = JSON.parse(this.responseText);
    startFighter2(data1)
}


//start application
const startFighter1 = () => {
    let fighter1 = document.getElementById("fighter1-input").value;
    let request1 = new XMLHttpRequest();
    request1.addEventListener("load", xhrFighter1); 
    request1.addEventListener("error", nope);
    request1.open("GET", `https://teamtreehouse.com/${fighter1}.json`);
    request1.send();
};

const startFighter2 = (player1info) => {
    let fighter2 = document.getElementById("fighter2-input").value;
    let players = [];
    let request2 = new XMLHttpRequest();
    request2.addEventListener("load", xhrFighter2); 
    request2.addEventListener("error", nope);
    request2.open("GET", `https://teamtreehouse.com/${fighter2}.json`);
    request2.send();

    function xhrFighter2 () {
        const data2 = JSON.parse(this.responseText);
        players.push(player1info, data2);
        fighterString(players);
    }
};

const startApplication = () => {
    document.getElementById("fight-button").addEventListener("click", startFighter1)
}


startApplication();

 const fighterString = (fighterArray) => {
     let fighterString = "";
     for (let i=0; i<fighterArray.length; i++) {
     fighterString += `<div class="col-md-6">`;
     fighterString +=     `<div class="panel">`;
     fighterString +=         `<div class="panel-heading">`;
     fighterString +=             `<div class="center">`
     fighterString +=                  `<h2 class="panel-title">${fighterArray[i].name}</h2>`;
     fighterString +=             `</div>`;
     fighterString +=         `</div>`;
     fighterString +=         `<div class="panel-body">`
     fighterString +=             `<div class="center">`
     fighterString +=                  `<img class="player-image"src="${fighterArray[i].gravatar_url}">`;
     fighterString +=            `</div>`;
     fighterString +=            `<div class="center">`
     fighterString +=                  `<p class="points">${fighterArray[i].points.total}</p>`;
     fighterString +=            `</div>`;
     fighterString +=        `</div>`;
     fighterString +=    `</div>`;
     fighterString += `</div>`;
     }
     writeToDom(fighterString, "player-holder");
     winnerNow(fighterArray); 
 }


 
 const winnerNow = (fighterArray) => {
     let fighter1 = fighterArray[0].points.total;
     let fighter2 = fighterArray[1].points.total;
     if (fighter1 > fighter2) {
         badgesCard(fighterArray[0]);
     } else {
         badgesCard(fighterArray[1]);
     }
 }

 const badgesCard = (fighter) => {
     let winnerString = "";
     winnerString += `<div class="row">`
     winnerString +=     `<div class="col-md-12">`;  
     winnerString +=     `<div class="winner-name">`
     winnerString +=          `<div class="panel-title winner">${fighter.name} WINS!!!!</div>`;
     winnerString +=     `</div>`;
     winnerString +=     `</div>`;
     winnerString += `</div>`;
     for (let j=0; j<fighter.badges.length; j++) {
     winnerString += `<div class="col-md-1">`;
     winnerString +=     `<div class="panel">`;
     winnerString +=         `<div class="panel-body badges-holder img-circle">`
     winnerString +=              `<img class="badge-image" src="${fighter.badges[j].icon_url}">`;
     winnerString +=         `</div>`;
     winnerString +=     `</div>`;
     winnerString += `</div>`;
     }
     writeToDom(winnerString, "winner-holder")
 }
 








