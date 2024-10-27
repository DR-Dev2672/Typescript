const user:(string|number)[]=["dev",5];


// const user:(string|number)[]=[5,"dev"]; //not provide error



// ............tuples......................


let tUser :[string|number|boolean]=["dev",121,true];

// let tUser : [string|number|boolean]=[12,true,"dev"];  //give error

// order of types matters in tuples



// tUser.push("dev") //it will work....
type User=[number,string]
const newUser:User=[112,"dev"]
newUser[1]="shivam"
// newUser[1]=521   //it will gives error because at 1 index string is required















