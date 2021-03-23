console.log("hi");

// document.getElementById("myform").addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("form is submitted, default is prevented");
// });

function myFunction() {
  var x = document.getElementById("myform").elements[0].value;
  var name = document.getElementById("result");
  name.innerHTML = "your name is " + x;
}
