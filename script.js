const canvas = document.querySelector(".canvas");
const submit = document.querySelector(".submit");
const grid_size = document.querySelector(".grid_size");
const clear = document.querySelector(".clear");

document.addEventListener('DOMContentLoaded', () => {
    change_grid(16)
}, false);

function change_grid(pixels) {
    canvas.textContent = ""
    for (let index = 0; index < pixels * pixels; index++) {
        const pixel = document.createElement("div");
        pixel.classList.add("grid");
        canvas.appendChild(pixel);
        pixel.style.background = "white";
        const rel = (canvas.clientWidth / pixels).toString();
        pixel.style.width = rel + "px";
        pixel.style.height = rel + "px";
        pixel.addEventListener("mouseover", () =>{
            pixel.style.background = "black";
        })
        clear.addEventListener("click", () =>{
            pixel.style.background = "white";
        });
    };
}



submit.addEventListener("click", () =>{
    change_grid(grid_size.value);
    grid_size.value = ""
});

