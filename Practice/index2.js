function timerFn(){
    
    let value = Math.floor(Math.random()*10);
    return value;
}


function myfn(resolve, reject){
  
    setTimeout(()=>{
        let value = Math.floor(Math.random()*10);
        console.log(value);
        if(value<5){
            resolve("It is less than 5")
        }
        else{
            reject("Its rejected")
        }   
    }, 2000);
}


const myPromise = new Promise(myfn);


myPromise.then((data)=>console.log(data)).catch((value)=>console.log(value))