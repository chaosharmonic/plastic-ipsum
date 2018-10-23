const ipsum = document.querySelector("#ipsum");
let length = document.querySelector("input").value

// Generate random paragraph

const lorem = (arr) => {
  let text = "";
  let arr2 = arr.slice();
  for (var i = 0; i < 25; i++) {
    let rand = Math.floor(Math.random() * arr2.length);
    text += `${arr2[rand]} `;
    arr2.splice(rand, 1);
  }
  return text;
}

// Populate with generated paragraph

const filler = (num) => {
  ipsum.innerHTML = "";
  for (var i = 0; i < num; i++){
    ipsum.appendChild(document.createElement("p"));
  }
  let p = document.querySelectorAll("#ipsum p");
  for (var i = 0; i < num; i++){
    p[i].textContent = lorem(content);
  }
}

filler(length);

document.querySelector("button").addEventListener("click", () => {
  length = Number(document.querySelector("input").value)
  filler(length);
});
