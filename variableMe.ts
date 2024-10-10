//string 
let hello:string="hello world"
hello.toUpperCase()
console.log(hello)


//number

let val:number=5555;
let val2:number=445.55;

//boolean
let isLoggedIn:boolean=false
//we will not needed to put type of variable always .typescript is smart enough to detect them


let hero;
function getHero(){
    return "thor"
}
hero=getHero()
//this will say strig is any because if we not initialising a variable with type then it takes themselves as a value any

// let hero;
// function getHero(){
//     return true
// }
// hero=getHero()

// api calls can change the value in boolian this will cause error

// let hero:string;
// function getHero(){
//     return "thor"
// }
// hero=getHero()

// this is the safe casse


//  function in typescript




