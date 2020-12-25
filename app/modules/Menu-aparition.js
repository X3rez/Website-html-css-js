
export default function menuAparition (button, menu){
    button.addEventListener("click",()=>{
        menu.classList.toggle("aparition")
    })
}