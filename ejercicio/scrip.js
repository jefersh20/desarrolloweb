let add = document.querySelector("#add");
let substrac = document.querySelector("#substrac");
//console.log(add, substrac)
add.addEventListener("click", function(){

    let output = document.querySelector("#output");
    let numeroMaximo = 10;
    let result =  parseInt (output.innerText) +1;
    output.innerText = result;
    if (result <= numeroMaximo) {
        output.innerText = result;
      } else {
        alert("¡Se ha alcanzado el número máximo!");
        output.innerText = 0;
      }

})

subtract.addEventListener("click", function() {
  let result = parseInt(output.innerText) - 1;
  
  if (result >= 0) {
    output.innerText = result;
  } else {
    alert("El contador no puede ser negativo.");
  }
})