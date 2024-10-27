

function getVal(val:number){
    if(val>5)
        return true
    else
      return "200 OK"
}
//string and boolean   both uses 


const heroes=[
    "thor",
    "spider",
    "dev"
]
//const heroes=[1,2,3]

heroes.map((hero):string=>{return `hero is ${heroes}`})
// heroes.map((hero):string=>{return 2})

//no need of type


//use of void

function consoleError(errormsg:string):void{
    console.log(errormsg)

}
//use of never

function handleError(errormsg:string):never{
    throw new Error(errormsg);
}