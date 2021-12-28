import {elo} from './dwa'
import siema from './dwa'
const btn=document.querySelector("button")
const btn2=document.querySelector(".button2")
btn.addEventListener("click",()=>{
    location.href = "index2.html"
})
btn2.addEventListener("click", ()=>{
    siema()
    console.log("siema")
})
