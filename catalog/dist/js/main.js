document.addEventListener("DOMContentLoaded", function () {
  const label = document.querySelector(".menu__checkbox-label")
  label.addEventListener('click', function (event) {
    console.log("hello")
    if (label.querySelector("#discount").checked) {
      label.style.color = "#FF3D00"
    } else {
      label.style.color = "#323232"
    }
  })

  // making collapsible text in section leader
  const coll = document.querySelector('.leader__card-button')

  coll.addEventListener('click', event => {
    const content = event.target.previousElementSibling
    coll.classList.toggle('leader__card-button--active')
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
});