const DEFAULT_GRID_SIZE = 16;
const gridSpace = document.querySelector(".grid");

function createGrid(gridSize) {
    console.log("Running createGrid function.");
    gridSquareCount = gridSize ** 2;
    for (let i=0; i<gridSquareCount; i++){
        let gridDiv = document.createElement("div");
        gridDiv.className = "grid-square";
        gridSpace.appendChild(gridDiv);
    }
}

createGrid(DEFAULT_GRID_SIZE);