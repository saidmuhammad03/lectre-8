// let box = document.querySelector(".box");

// setInterval(() => {
//   let date = new Date();

//   box.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }, 1000);





function get(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
             let random=Math.random()*10    
             if(random>6){
                resolve("bolo 6")
             } else{
                reject("poin 6")
             }
        },4000)
    
    })
}
 console.log(get()
 .then((response)=> console.log(response))
 .cath((error)=> console.log(error))
 )          