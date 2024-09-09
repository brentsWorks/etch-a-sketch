const CONTAINER_SIZE = "500";


const bodyContainer = document.createElement("div");
bodyContainer.className = "bodyContainer";
document.body.appendChild(bodyContainer);

const container = document.createElement("div"); // container for inner squareContainer and popup
container.className = "secondaryContainer";
bodyContainer.appendChild(container);

const buttonContainer = document.createElement("div");
buttonContainer.className = "buttonContainer";
container.appendChild(buttonContainer)

const popup = document.createElement("button");
popup.className = "popup";
popup.textContent = "Resize";
buttonContainer.appendChild(popup);

const reset = document.createElement("button");
reset.className = "reset";
reset.textContent = "Reset";
buttonContainer.appendChild(reset);

const squareContainer = document.createElement("div"); // container for square divs
squareContainer.className = "squareContainer";
squareContainer.style.width = CONTAINER_SIZE+'px'; 
squareContainer.style.height = CONTAINER_SIZE+'px';
container.appendChild(squareContainer);

function createGrid(gridDimension) {
	const squareSize = String( (Number(CONTAINER_SIZE) / gridDimension) - 2 ) + 'px'; // +2 for border
	for (let i = 0; i < gridDimension; ++i) {
		for (let j = 0; j < gridDimension; ++j) {
			let newSquare = document.createElement("div"); // each square cell is (width or height since same) + padding 
			newSquare.style.border = "solid black 1px";
			newSquare.style.flexBasis = squareSize;
			newSquare.style.height = squareSize;
			newSquare.style.flexShrink = 1;
			newSquare.className = "square";
			newSquare.id = "square";
			squareContainer.appendChild(newSquare);
			newSquare.addEventListener('mouseover', () => {
				newSquare.className = "selectedSquare";
			});
			
			/*  comment in with css comment to add color fade
			newSquare.addEventListener('mouseout', () => {
				newSquare.className = "square";
			})
			*/
		}
	}
	return;
}

function removeGrid() { // delete actual grid of squares
	const squaresToRemove = squareContainer.querySelectorAll("#square");
	squaresToRemove.forEach(square => {
		square.remove();
	});
	return;
}

function resetGrid() {
	// could reset all squares, only need to reset the highlighted ones
	const squaresToReset = squareContainer.querySelectorAll(".selectedSquare");
	squaresToReset.forEach(square => {
		square.className = "square";
	})
	return;
}
popup.addEventListener('click', () => { // once clicked, ensure valid input for grid dimensions
	let inputValid = false; 
	let gridDimension;
	while (!inputValid) {
		gridDimension = prompt("Enter your desired dimensions for your sketchpad (1-100)");
		parsedDimension = (parseInt(gridDimension));
		if (parsedDimension > 0 && parsedDimension <= 100) {
			inputValid = true;
		} else if (gridDimension === '' || gridDimension === null) {
			return; 	// if null or empty, just keep current grid
		}
	}
	resetGrid();
	removeGrid();
	createGrid(gridDimension);
});

reset.addEventListener('click', () => {
	resetGrid();
});

createGrid("16");

// Only need to finish the following: 

// - Resize doesn't work at values > 23 ~ and some random values like 6
// - Extra Credit


