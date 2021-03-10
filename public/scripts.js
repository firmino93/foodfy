const recipes = document.querySelectorAll(".content")

for(let i = 0; i < recipes.length; i++) {
  recipes[i].addEventListener("click", function () {
    window.location.href = `/recipes/${i}`
  })
}

const Content = document.querySelectorAll(".content")

const buttons = document.querySelectorAll("button") 

for (let [i,button] of buttons.entries()) {
  
  button.addEventListener("click", function() {
      
      if(Content[i].classList.contains("show")){
          Content[i].classList.remove('show')
          Content[i].classList.add('hide')
          button.innerHTML= "MOSTRAR"
      } else {
          Content[i].classList.add('show')
          Content[i].classList.remove('hide')
          button.innerHTML= "ESCONDER"
      }

  })  
}