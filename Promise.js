const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const randomNum = Math.floor(Math.random()*10);

        if(randomNum < 5){
            resolve("Resolved: It is less than  5");
        }
        else{
            reject("Rejected: It is greater than 5");
        }
    },1000)
});


myPromise.then((result)=>{
    console.log("Result:", result);
}).catch((reason)=>{
    console.log("Reason:", reason);
})