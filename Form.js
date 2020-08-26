class Form{
    constructor(){

    }

display(){
  var title=createElement('h2',"Car Racing");  
  var input = createInput('name');
  var button = createButton('PLAY');
  title.position(130,0);
  input.position(130,160);
  button.position(250,200);
}
}