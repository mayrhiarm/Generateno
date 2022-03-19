let randomnumber = Math.ceil(Math.random() * 20);
console.log(randomnumber);

let btn = document.querySelector("button");

let h2 = document.querySelector("h2");

function Random() {
  h2.innerText = randomnumber;

  location.reload();
}
if (randomnumber < 20) {
  console.log(h2);
  h2.innerText = randomnumber;
} else {
  console.log(h2);
  h2.innerText = randomnumber;
}

// Random();

btn.addEventListener("click", Random);
