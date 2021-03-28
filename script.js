
let ran=Math.floor(Math.random()*10)+1;
console.log(`random:${ran}`);
let low=1;
let high=10;
for(var i=0;i<3;i++){
    
    var num=prompt(`enter a number between 0 to 10
You are in ${i+1} no chance 
chance left: ${3-i-1}
if You enter an invalid input(exp:null input,"a,b,c",input>10,input<1), program will not accept your input.You must have to give input 1 to 10`);
if(isNaN(num)){
    alert(`You don't enter a number.so it is not acceptable and You have to move in ${i+1} no chance for giving valid input.Enter number in range of 1 to 10 for ${i+1} no chance `)
    i=i-1;
    
}
else if((num<low)||(num>high)){
    alert(`Your number is not in range 1 to 10.so it is not acceptable and You have to move in ${i+1} no chance for giving valid input.Plz enter number in range of 1 to 10 for ${i+1} no chance`);
    i=i-1;
}
else{
    if(num==ran){
        alert("You win!");
        
        
        break;
    }
    else if(num<ran){
        if(i==2){
            alert("You loss")
        }
        else{
            alert("Correct answer is greater!");
        }
        
        
    }
    else{
        
        if(i==2){
            alert("You loss!")
        }
        else{
            alert("Correct answer is smaller! ");
        }
        
    }
}
}

document.querySelector("#reset").addEventListener("click",reset);
function reset(){
   
let ran=Math.floor(Math.random()*10)+1;
let low=1;
let high=10;
console.log(`random:${ran}`);
for(var i=0;i<3;i++){
    
    let num=prompt(`enter a number between 1 to 10
You are in ${i+1} no chance 
chance left: ${3-i-1}
if You enter an invalid input(exp:null input,"a,b,c",input>10,input<1), program will not accept your input.You must have to give input 1 to 10`);
if(isNaN(num)){
    alert(`You don't enter a number.so it is not acceptable and You have to move in ${i+1} no chance for giving valid input.Enter number in range of 1 to 10 for ${i+1} no chance `)
    i=i-1;
}
else if((num<low)||(num>high)){
    alert(`Your number is not in range 1 to 10.so it is not acceptable and You have to move in ${i+1} no chance for giving valid input.Plz enter number in range of 1 to 10 for ${i+1} no chance`);
    i=i-1;
}
else{
    if(num==ran){
        alert("You win!");
        
       
        break;
    }
    else if(num<ran){
        if(i==2){
            alert("You loss!")
        }
        else{
            alert("Correct answer is greater!");
        }
      
        
    }
    else{
        if(i==2){
            alert("You loss!")
        }
        else{
            alert(" Correct answer is smaller!");
        }
        
        
    }
}
}

}        