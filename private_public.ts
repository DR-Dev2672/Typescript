// class User {
//     private name:string
//     // #name:string
//     public email:string
//     readonly city:string="jaipur"

//     constructor(name:string,email:string) {
//     this.email=email;
//     this.name=name
        
//     }
// }


// new way to write it

class User {
    
    readonly city:string="jaipur"

    constructor(private name:string, public email:string ,private userId:string) {
    this.email=email;
    this.name=name;
    this.userId=userId;
        
    }
}








export{}