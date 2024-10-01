const canvas = document.querySelector(".canvas");
const submit = document.querySelector(".submit");
const grid_size = document.querySelector(".grid_size");
const clear = document.querySelector(".clear");
const color_picker = document.querySelector(".color_picker")
const randomize = document.querySelector(".random")
const erase = document.querySelector(".erase")

let color = "black"
let current_grid_size = 16
let eraser = false;

let isMouseDown = false;

document.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

document.addEventListener('DOMContentLoaded', () => {
    change_grid(current_grid_size)
}, false);

function change_grid(pixels) {
    canvas.textContent = ""
    for (let index = 0; index < pixels * pixels; index++) {
        const pixel = document.createElement("div");
        pixel.classList.add("grid");
        canvas.appendChild(pixel);
        const rel = (canvas.clientWidth / pixels).toString();
        pixel.style.width = rel + "px";
        pixel.style.height = rel + "px";
        pixel.addEventListener("mouseover", () =>{
            if (isMouseDown){
                pixel.style.background = color;
            }
        })
        clear.addEventListener("click", () =>{
            pixel.style.background = "white";
        });
    };
}

color_picker.addEventListener("change", () =>{
    color = color_picker.value;
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

submit.addEventListener("click", () =>{
    current_grid_size = grid_size.value;
    change_grid(current_grid_size);
    grid_size.value = "";
});

randomize.addEventListener("click", () =>{
    color = getRandomColor();
    color_picker.value = color;
});

erase.addEventListener("click", (e) =>{
    if (eraser){
        e.target.style.background = ""
        color = color_picker.value;
        eraser = false
    }
    else{
        eraser = true;
        color = "white";
        e.target.style.background = "rgb(140, 140, 140)";
    }
});
    