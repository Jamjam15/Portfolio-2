// Select Button and the Container
let addBoxButton = document.getElementById("addBoxButton");
let container = document.querySelector(".container");

// Add Function to Button
addBoxButton.addEventListener("click", function(){
    // Create New Box
    let newBox = document.createElement("a");
    newBox.href = "tetris.html";
    newBox.target = "_blank"

    // Add Items to the Box
    newBox.innerHTML = `
            <div class="box">
                <h1>Tetris</h1>
                <img src="./images/tetris.jfif" alt="" class="picture">
                <div class="line"></div>
                <div class="number">
                    <li>02:20</li>
                    <li>-00:58</li>
                </div>
                <div class="controls">
                    <div><img src="./images/rewind.png" alt="" class="icons"></div>
                    <div><img src="./images/pause-button.png" alt="" class="icons"></div>
                    <div><img src="./images/fast-forward (1).png" alt="" class="icons"></div>
                </div>
            </div>`;

    // Append the new box to the container
    container.appendChild(newBox);
})