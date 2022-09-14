function zoom() {
  document.body.style.zoom = "100%";
}

let btn = document.querySelector("#toggleAll")
let container = document.querySelector(".container-fluid")

btn.addEventListener("click", function() {
 
  container.classList.toggle("black")
})
