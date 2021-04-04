const blocks = document.querySelectorAll(".block")

for(let block of blocks){
  block.addEventListener('click', () =>{
    const blockID = block.getAttribute('id')
    window.location.href = `/receitas/${blockID}`
  })
}

const btnMostrar = document.querySelectorAll(".btn_mostrar")
const contentView = document.querySelectorAll(".content")

for(let i=0; i < btnMostrar.length; i++){
  btnMostrar[i].addEventListener("click",()=>{
    if(contentView[i].classList.contains("view")){
      contentView[i].classList.remove("view")
      btnMostrar[i].textContent = "Esconder"
    } 
    else{
      contentView[i].classList.add('view')
      btnMostrar[i].textContent = "Mostrar"
    }})
}



  