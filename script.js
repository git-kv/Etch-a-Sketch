const DEFAULT_GRID_SIZE = 16;
const GRID_DIMENSIONS = 512;
const gridSpace = document.querySelector(".grid");
const DEFAULT_COLOR = "black";
let r = 0;
let g = 0;
let b = 0;
let rgb;
let customSize = DEFAULT_GRID_SIZE;
const smallSizeBtn = document.querySelector('.small');
const mediumSizeBtn = document.querySelector('.medium');
const largeSizeBtn = document.querySelector('.large');
const gridSizeButtons = document.querySelectorAll('.size-button');
const applyCustomButton = document.querySelector('.apply-button');
const resetButton = document.querySelector('.reset-button');
const colorButtons = document.querySelectorAll('.color-button');
const blackColorButton = document.querySelector('#black');
const rainbowColorButton = document.querySelector('#rainbow');

function createGrid(gridSize) {
    gridSpace.style.height = GRID_DIMENSIONS + "px";
    gridSpace.style.width = GRID_DIMENSIONS + "px";
    console.log("Running createGrid function.");
    gridSquareCount = gridSize ** 2;
    gridSquareDimensions = GRID_DIMENSIONS / gridSize;
    for (let i=0; i<gridSquareCount; i++){
        let gridDiv = document.createElement("div");
        gridDiv.className = "grid-square";
        gridDiv.style.height = gridSquareDimensions + "px";
        gridDiv.style.width = gridSquareDimensions + "px";
        gridSpace.appendChild(gridDiv);
    }

    let gridSquares = document.querySelectorAll('.grid-square');

    gridSquares.forEach(gridSquare => {
        gridSquare.onmouseover = function () {
            this.style.backgroundColor = setGridSquareColor();
        }
    });
}

function setGridSquareColor() {
    if (rainbowColorButton.classList.contains("highlight-on")) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        rgb = `rgb(${r}, ${g}, ${b})`;
        return rgb;
    }
    return "black";
}

function highlightSizeButton(size) {
    if (size == 16){
        customSize = 16;
        smallSizeBtn.classList.add("highlight-on");
        mediumSizeBtn.classList.remove("highlight-on");
        largeSizeBtn.classList.remove("highlight-on");
    }
    else if (size == 32){
        customSize = 32;
        mediumSizeBtn.classList.add("highlight-on");
        largeSizeBtn.classList.remove("highlight-on");
        smallSizeBtn.classList.remove("highlight-on");
    }
    else if (size == 64) {
        customSize = 64;
        largeSizeBtn.classList.add("highlight-on");
        mediumSizeBtn.classList.remove("highlight-on");
        smallSizeBtn.classList.remove("highlight-on");
    }
}

function highlightColorButton(id) {
    if (id == "black") {
        blackColorButton.classList.add("highlight-on");
        rainbowColorButton.classList.remove("highlight-on");
    }
    else if (id == "rainbow") {
        rainbowColorButton.classList.add("highlight-on");
        blackColorButton.classList.remove("highlight-on");
    }
}

gridSizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        highlightSizeButton(button.id);
    });
});

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        highlightColorButton(button.id);
        console.log(button.id);
    });
});

applyCustomButton.addEventListener('click', () => {
    gridSpace.textContent = '';
    createGrid(customSize);
});

createGrid(DEFAULT_GRID_SIZE);