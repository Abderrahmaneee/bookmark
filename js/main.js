const Buttons = document.querySelectorAll('#nav-tab');
const boxs = document.querySelectorAll('.tab-content');

function removeCurrentButton(button) {
  button.classList.remove('nav-active');
}
function setNewCurrentButton(button) {
  button.classList.add('nav-active');
}
  function showHidePanels(buttonId) {
    boxs.forEach((box) => {
        box.classList.remove('active-tab');
      if (box.id === buttonId) {
        box.classList.add('active-tab');
      }
    });
  }
Buttons.forEach((Button) => {
 Button.addEventListener('click', function () {
    if (Button.classList.contains('active')) {
      return;
    }
    Buttons.forEach((Button) => {
      removeCurrentButton(Button);
    });
    setNewCurrentButton(Button);
    const buttonId = Button.getAttribute('data-section');
    showHidePanels(buttonId);
  });
});
this.addEventListener("DOMContentLoaded", () =>{
  const questions = document.querySelectorAll(".text");
  questions.forEach((question) => question.addEventListener("click", () =>{
      if(question.parentNode.classList.contains("active")){
          question.parentNode.classList.toggle("active")
      }
      else{
          questions.forEach(question => question.parentNode.classList.remove("active"))
          question.parentNode.classList.add("active")
      }
    }))
}) 
const nav = document.querySelector('.nav');
function openFunction(){
  nav.classList.add('active-nav');
 }
function closeFunction(){
  nav.classList.remove('active-nav');
}
