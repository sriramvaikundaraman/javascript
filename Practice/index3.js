enabled = true;
innerenabled= true;

// if(enabled){
//     setTimeout(()=>{
//         console.log("Outer IF");
//     }, 3000);

//     if(innerenabled){
//         setTimeout(()=>{
//             console.log("Inner IF");
//         },1000);
//     }
// }



new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log("Outer ")
        res("Resolved 1");
    }, 3000);
}).then((data)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Inner");
            resolve("Inner");
        }, 1000);
    });
})
.then((data)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("2ndInner", data);
            resolve("Finished");
        }, 500);
    });
})
