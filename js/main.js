let input = document.getElementById("inp");
let btn = document.getElementById("btn");
let boxs = document.querySelectorAll(".box");
let drag = null;
let bin = document.getElementsByClassName("bin")[0];

btn.onclick = () => {
    if (input.value != "") {
        boxs[0].innerHTML += `<p class="item" draggable="true">${input.value}</p>
        `;
        input.value = "";
    }
    items();
};
function items() {
    let items = document.querySelectorAll(".item");
    items.forEach((item) => {
        item.addEventListener("dragstart", () => {
            item.style.opacity = "0.5";
            drag = item;
        });
        item.addEventListener("dragend", () => {
            item.style.opacity = "1";
            drag = null;
        });
        boxs.forEach((box) => {
            box.addEventListener("dragover", (e) => {
                e.preventDefault();
                box.style.background = "#090";
                box.style.color = "#fff";
            });
            box.addEventListener("dragleave", () => {
                box.style.background = "White";
                box.style.color = "black";
            });
            box.addEventListener("drop", () => {
                box.append(drag);
                box.style.background = "White";
                box.style.color = "black";
            });
        });
        
    });
}
bin.addEventListener("dragover",(e)=>{
    e.preventDefault()
})
bin.addEventListener("drop",()=>{
        drag.remove()
        })
