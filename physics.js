const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){

    //you will configure your series of questions inside here.
if(str == motion){
    terminal.question("which variable are you solving for")
}
else if(str == energy){
    terminal.question("which variable are you solving for?")
}
else{
    alert("I'm sorry I don't know how to calculate that yet...")
}
});
