const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

const arr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const random = () => {
  return Math.floor(Math.random() * arr.length);
};

btn.addEventListener("click", () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += arr[random()];
  }
  document.body.style.background = hex;
  text.textContent = hex;
});
