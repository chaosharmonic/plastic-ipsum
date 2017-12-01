var button = document.querySelector("button");
var text = "";
var p = document.querySelectorAll("p");
var ipsum = document.querySelector("#ipsum");
var length = document.querySelector("input").getAttribute("value")

// Generate random paragraph

function lorem(arr) {
  text = "";
  var arr2 = arr.slice();
  for (var i = 0; i < 25; i++) {
    var rand = Math.floor(Math.random() * arr2.length + 1);
    text += arr2[rand] + " ";
    arr2.splice(rand, 1);
  }
  return text;
}

// Populate with generated paragraph

function filler(num) {
  ipsum.innerHTML = "";
  for (var i = 0; i < num; i++){
    p = document.createElement("p");
    ipsum.appendChild(p);
  }
  p = document.querySelectorAll("#ipsum p");
  for (var i = 0; i < num; i++){
    p[i].textContent = lorem(content);
  }
}

filler(length);

button.addEventListener("click", function(){
  length = Number(document.querySelector("input").value)
  filler(length);
});
