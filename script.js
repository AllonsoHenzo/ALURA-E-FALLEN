const team1= "Lonf";
const team2= "Trybe";
let turn = team1;
const turnText = document.querySelector("#turnText");
turnText.innerText="É a vez da equipe "+turn+" banir o mapa";
const maps= document.querySelectorAll(".card");
function choosemap(event) {
    console.log(event.currentTarget);
    if(turn==team1){
        turn=team2
    } else{
        turn=team1
    } 
    turnText.innerText="É a vez da equipe "+turn+" banir o mapa";
}
for (let index=0;index < maps.length; index++){
    maps[index].addEventListener("click",choosemap)
}
