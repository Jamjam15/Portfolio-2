// Select Button and the Container
let addBoxButton = document.getElementById("addBoxButton");
let container = document.querySelector(".container");

// Add Function to Button
addBoxButton.addEventListener("click", function(){
    // Create New Box
    let newBox = document.createElement("div");
    newBox.classList.add("box");

    // Append the new box to the container
    container.insertBefore(newBox, addBoxButton.parentNode);
})