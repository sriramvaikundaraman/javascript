const myPromise = new Promise((res, rej)=>{
    setTimeout(()=>{
        const randomNum = Math.floor(Math.random()*10);

        if(randomNum < 5){
            res("Resolved: It is less than  5");
        }
        else{
            rej("Rejected: It is greater than 5");
        }
    },1000)
});


myPromise.then((result)=>{
    console.log("Then Result:", result);
}).catch((reason)=>{
    console.log("Catch Result:", reason);
})


// Async await