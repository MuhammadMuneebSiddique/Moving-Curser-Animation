let body : any = document.querySelector("#main")
let crsr:any= document.querySelector("#curser")

body.addEventListener("mousemove",(e:any)=>{
    crsr.style.left=e.x+"px"
    crsr.style.top=e.y+"px"
})