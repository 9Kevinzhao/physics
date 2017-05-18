const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");

}
printOptions()
termianl.question("type your variables",function(strcma){
terminal.question("What type of equation are you looking for?",function(str){
    str.toLowerCase();
    //you will configure your series of questions inside here.
if(str == motion){
    terminal.question("which variable are you solving for",function(str){

            function convertToArray(strcma){
            strcma = strcma.split(',');
            for(let i=0;i<strcma.length;i++){
                strcma[i] = Number(strcma[i]);
            }
            return strcma;
        }

        if(str==accelerate){
            motion.accelerate(strcma[1],strcma[3])
        }

        if(str==b){}
        if(str==t){}
        if(str==v){}


        /*String handeling
          Every question receives a string as input.  Since you know that strings can be upper (65 -90) or lower (97 - 122), it helps your program if it is all in one case.
          Use str.toLowerCase() to automatically change str to a lower case character.
          Make this the immediate first step after each question.
        */
        terminal.question("My question?", function(str){
            //If I typed in "Motion"
            str.toLowerCase();
            //Now str == "motion";
        });
    })
}
else if(str == energy){
    terminal.question("which variable are you solving for?"),function(str){
        if(str==ke){}
        if(str==m){}
        if(str==v){}
    }
}
else{
    alert("I'm sorry I don't know how to calculate that yet...")
}
});
)};


////////////////////////////////////////////////////////////////////////////
