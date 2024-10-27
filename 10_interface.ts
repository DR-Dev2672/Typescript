interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    // startTrail:()=>string, // this is also the way to write it
    startTrail():string,
    getCoupon(couponName:string,value:number):number
}

const dev:User={
    dbId:22,
    email:"dev@gmail.com",
    userId:2154,
    startTrail:()=>{
        return "trail started"
    },
    getCoupon(couponName:"devv10",value:10){
        return 10
    }
}
export{}