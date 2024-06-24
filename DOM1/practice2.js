let boxes = document.querySelectorAll(".box");
// console.log(boxes)
// boxes[0].innerText="Hello";
// boxes[1].innerText="Debu";
// boxes[2].innerText="Lisa";

let idx = 1;

for (const box of boxes) {
    box.innerText = `New Value at Box ${idx}`;
    idx++;
}




