let btns = document.querySelector(".start")
let btnr = document.querySelector(".reset")
let img = document.querySelector("img")

let val = 0;
let b = 0


btns.addEventListener("click", () => {
    b = Math.round(Math.random()*10000)
console.log(b);
    function a() {
        img.style.transform=`rotate(${val}deg)`
        val+=5
        if(val>b){
            clearInterval(int)
            
            
        }
    }
    let int=setInterval(()=>{
        a()
    },0)
    
})
btnr.addEventListener("click", ()=>{
    val = 0
    img.style.transform=`rotate(${val}deg)`
})