/* in this we will learn about protected in typescript */

class User {
    
    protected _courseCount=1;

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

class SubUser extends User{
    isFamily:boolean=true;//new property added
    changeCourseCount(){
            this._courseCount=4;//change the protected value with the user of inheritance
    }
}

export{}