let openFormContainer = document.getElementById("addBoxButton");
let containerForm = document.getElementById("container-form");
let closeButton = document.getElementsByClassName("x-btn")[0];
let submitButton = document.querySelector(".submit-btn");
let container = document.querySelector(".container");

openFormContainer.addEventListener("click", function(){
    containerForm.classList.add("active");
})

closeButton.addEventListener("click", function(){
    containerForm.classList.remove("active")
})


submitButton.addEventListener("click", function(){
    let projectName = document.getElementById("pname").value.trim();

    if (projectName){
        let newBox = document.createElement("div");
        newBox.classList.add("box");

        newBox.innerHTML = `
                    <h1>${projectName}</h1>
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
                    </div>`

        container.appendChild(newBox);

        document.getElementById("pname").value = "";

        containerForm.classList.remove("active");
    } else {
        alert("Please enter a project name");
    }

})