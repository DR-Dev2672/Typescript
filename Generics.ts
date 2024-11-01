//Generics


function identifyOne(val:number):number{
    return 12;
}

function identifyTwo(val:any ):any{
    return 12;                       //-----> this function can take string and return number means any -->any
}

function identifyThree <Type>(val:Type):Type{
    return val;
}
identifyThree("dev")
identifyThree(15)
identifyThree(true)




//it can take any value then locking the type for return and returns only the given provided type 











