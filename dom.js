let box1 = document.querySelector(".box1");

let api = "https://655367345449cfda0f2ea0f3.mockapi.io/todo";

function getData() {
  return new Promise((resolve, reject) => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
getData().then((data) => get(data));

function get(data) {
  data.forEach((elem) => {
    let div = document.createElement("div");
    div.classList="container";
    let h1 = document.createElement("h1");
    h1.innerHTML = elem.title;
    let image = document.createElement("img");
    image.src = elem.avatar;
    div.append(image, h1);
    box1.appendChild(div);
  });
}
