let obj = {
    data : [1,2,3],
    processData : function(){
        this.data.forEach((num)=>{
            console.log(num*this.factor)
        })
    },
    factor :5
}

obj.processData()