class Game{
    constructor(){
    
    }

getState(){
database.ref('gameState').on("value",function(data){
 gameState=data.val();
})
} 

updateState(state){
database.ref('/').update({
gameState: state
})
}

start(){
if(gameState === 0){
formObj = new Form();
formObj.display();
playerObj=new player();
playerObj.getCount();
}    
}
}