//type narrowing for business logics
//  ""----> typeof of this is null  but we think it as a string, so this is js mistakes or loophole
//  to reduce this we use type narrowing method in which we consider every cases



function detectType(val:string|number){
    if(typeof val==="string"){
        return val.toLowerCase()
    }
    return val+3;
}

function provideId(id:string |null){
    if(!id){
        console.log(`Please provide id`)
        return 
    }
    id.toLowerCase();
}

//string[] is considered as a object in console




function printAll(strs: string | string[] | null) {
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }