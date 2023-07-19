const DEFAULT_GRID_SIZE = 16;
const GRID_DIMENSIONS = 500;
const gridSpace = document.querySelector(".grid");
const DEFAULT_COLOR = "black";

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
    return "black";
}

createGrid(DEFAULT_GRID_SIZE);