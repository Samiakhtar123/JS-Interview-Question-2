//Question 1

function firstEle(n){
    let arr = [7,9,0,-5];

    console.log(arr.slice(0,n));
    

}
firstEle(3);


//Question 2

function lastEle(n){
    let arr = [7,9,0,-2]

    console.log(arr.slice(arr.length-n));
    
}

lastEle(3)


//Question 3

function checkStr(n){
    if(n.length == 0){
        console.log("Blank");
        
    } else {
        console.log("Not Blank");
        
    }
}
checkStr("")


///Question 4

function checkChar(idx){
     let str = "ApnA ColLeGE";

     if(str[idx]== str[idx].toLowerCase()){
        console.log("Character is lowercase");
        
     } else {
        console.log("not a lowercase");
        
     }
}
checkChar(2);


//Question 5

let str = prompt("Enter the String");
console.log(`Original String = ${str}`);
console.log(`String without Spaces = ${str.trim()}`);



//Question 6

function CheckElement(arr){
    let ele = [5,9,8,4,0,6];

    if( ele.indexOf(arr) != -1 ){
        console.log("Exist");
        
    } else {
        console.log("Not Exist");
        
    }
}
CheckElement(8);
