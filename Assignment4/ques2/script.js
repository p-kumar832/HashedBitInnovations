function createDiv(width, height, text) {
    let newDiv = document.createElement("div");
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    newDiv.textContent = text;
    newDiv.classList.add("custom-div");
    
    document.getElementById("container").appendChild(newDiv);
}
createDiv(200, 100, "Hello World");
createDiv(200, 100, "Hello World");
createDiv(200, 100, "Hello World");

window.createDiv = createDiv;
