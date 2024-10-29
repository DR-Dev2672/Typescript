/* in this we will learn about getter and setter in typescript */

class User {
    
    private _courseCount=1;

    readonly city:string="jaipur"

    constructor(private name:string, public email:string ,private userId:string) {
    this.email=email;
    this.name=name;
    // this.userId=userId;
        
    }

 
    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum<=1){
         throw new Error(`Course count should be more than 1`)
        }
        this._courseCount=courseNum
    }

}