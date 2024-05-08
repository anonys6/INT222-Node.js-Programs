const readline = require('readline');

const a = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
a.question('Enter a value:',(userInput)=>{
    const num = parseInt(userInput);
    if(!isNaN(num)){
        table(userInput);
    }
    else{
        console.log('Invalid Input');
    }
    a.close();
});

function table(fromNumber){
    let num = 0;
    console.log("table: ");
    let interval = setInterval(function(){
        num++;
        if(num<11){
            console.log(fromNumber,"*",num,"=",fromNumber*num);
        }
        else{
            console.log('End');
            clearInterval(interval);
        }
    },1000);
}
