function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const containerField = document.querySelectorAll(".ingredient");
  const newField = containerField[containerField.length - 1].cloneNode(true);
  console.log(ingredients)
  console.log(containerField)
  console.log(newField)
  if (newField.children[0].value == "") return false;
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document
  .querySelector(".add_ingredient")
  .addEventListener("click", addIngredient);

  function addPasso() {
    const preparation = document.querySelector("#preparation");
    const containerField = document.querySelectorAll(".passo");
    const newField = containerField[containerField.length - 1].cloneNode(true);
  
    if (newField.children[0].value == "") return false;
    newField.children[0].value = "";
    preparation.appendChild(newField);
  }
  
  document
    .querySelector(".add_passo")
    .addEventListener("click", addPasso);
  
const modalContent = document.querySelector(".modal_content")
document.querySelector(".btn_deletar_modal").addEventListener("click",()=>{
  modalContent.classList.add('activ')
})

const btncalcel = document.querySelector(".btn_cancelar").addEventListener("click", ()=>{
  modalContent.classList.remove('activ')
})

