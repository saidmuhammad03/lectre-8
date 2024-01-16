let box=document.querySelector(".box");

let api="https://655367345449cfda0f2ea0f3.mockapi.io/todo"




async function getData(){
    try {
        let response= await fetch(api)
       let  data= await response.json()
       get(data)
    } catch (error) {
        console.log(error);
    }

}
getData()




function get(data){
    data.forEach((elem)=>{
    let sec1=document.createElement("div");
    sec1.classList="sec"
    let title=document.createElement("h1")
    title.innerHTML= elem.title
    let avatar=document.createElement("img")
    avatar.src=elem.avatar
       sec1.append(title, avatar)
    box.appendChild(sec1)
    })
}