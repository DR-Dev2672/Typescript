type User={
    name:string,
    email:string,
    isActive:boolean
}

// type myString =string
// we can use it 

function createUser(user:User):User{
    //some code
    return{name:"",email:"",isActive:false}
}

createUser({name:"",email:"",isActive:false})