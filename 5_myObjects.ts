const User={
   name:"Dev",
   email:"dev@gmail.com",
   isPaid:true
}

function createUser({name:string,isPaid:boolean}){

    //some code
}


createUser({name:"dev",isPaid:true})

// createUser({name:"dev",isPaid:true,email:"d.com"}) is not allowed
//to solve this problem
let newUser={name:"dev",isPaid:true,email:"d.com"}; 
createUser(newUser);
//this does not provide error

// function createCourse(){}{}
// a weird syntax

function createCourse():{name:string,price:number}{
  return {name:"node",price:255}
}


// function createCourse():{name:string,price:number}{
//     return {name:"node",price:255}
//   }






export{}