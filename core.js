var player = {},
	board = {
		topLeft: {
			up: "",
			left: "",
			right: "",
			down: ""
		},
		topCenter: {
			up: "",
			left: "",
			right: "",
			down: ""
		},
		topRight: {
			up: "",
			left: "",
			right: "",
			down: ""
		},
		midLeft: {
			up: "",
			left: "",
			right: "",
			down: ""
		},
		midCenter: {
			up: "",
			left: "",
			right: "",
			down: ""
		},
		midRight: {
			up: "",
			left: "",
			right: "",
			down: ""
		},
		botLeft: {
			up: "",
			left: "",
			right: "",
			down: ""
		},
		botCenter: {
			up: "",
			left: "",
			right: "",
			down: ""
		},
		botRight: {
			up: "",
			left: "",
			right: "",
			down: ""
		},
		emptySpaces: 9,
		
		getCell: function(cell){
			switch(cell){
				case 1:
					return this.topLeft;
				case 2:
					return this.topCenter;
				case 3:
					return this.topRight;
				case 4:
					return this.midLeft;
				case 5:
					return this.midCenter;
				case 6:
					return this.midRight;
				case 7:
					return this.botLeft;
				case 8:
					return this.botCenter;
				case 9:
					return this.botRight;										
			}
		},

		setCell: function(cell, card){
			console.log(card);
			var up = card.up,
				left = card.left,
				right = card.right,
				down = card.down;

			switch(cell){
				case 1:
					this.topLeft.up = up;
					this.topLeft.left = left;
					this.topLeft.right = right;
					this.topLeft.down = down;

					document.getElementById('cell1_up').innerHTML = board.topLeft.up;
					document.getElementById('cell1_left').innerHTML = board.topLeft.left;
					document.getElementById('cell1_right').innerHTML = board.topLeft.right;
					document.getElementById('cell1_down').innerHTML = board.topLeft.down;
					break;

				case 2:
					this.topCenter.up = up;
					this.topCenter.left = left;
					this.topCenter.right = right;
					this.topCenter.down = down;

					document.getElementById('cell2_up').innerHTML = board.topCenter.up;
					document.getElementById('cell2_left').innerHTML = board.topCenter.left;
					document.getElementById('cell2_right').innerHTML = board.topCenter.right;
					document.getElementById('cell2_down').innerHTML = board.topCenter.down;
					break;

				case 3:
					this.topRight.up = up;
					this.topRight.left = left;
					this.topRight.right = right;
					this.topRight.down = down;
					
					document.getElementById('cell3_up').innerHTML = board.topRight.up;
					document.getElementById('cell3_left').innerHTML = board.topRight.left;
					document.getElementById('cell3_right').innerHTML = board.topRight.right;
					document.getElementById('cell3_down').innerHTML = board.topRight.down;
					break;

				case 4:
					this.midLeft.up = up;
					this.midLeft.left = left;
					this.midLeft.right = right;
					this.midLeft.down = down;
					
					document.getElementById('cell4_up').innerHTML = board.midLeft.up;
					document.getElementById('cell4_left').innerHTML = board.midLeft.left;
					document.getElementById('cell4_right').innerHTML = board.midLeft.right;
					document.getElementById('cell4_down').innerHTML = board.midLeft.down;
					break;

				case 5:
					this.midCenter.up = up;
					this.midCenter.left = left;
					this.midCenter.right = right;
					this.midCenter.down = down;

					document.getElementById('cell5_up').innerHTML = board.midCenter.up;
					document.getElementById('cell5_left').innerHTML = board.midCenter.left;
					document.getElementById('cell5_right').innerHTML = board.midCenter.right;
					document.getElementById('cell5_down').innerHTML = board.midCenter.down;
					break;
				
				case 6:
					this.midRight.up = up;
					this.midRight.left = left;
					this.midRight.right = right;
					this.midRight.down = down;

					document.getElementById('cell6_up').innerHTML = board.midRight.up;
					document.getElementById('cell6_left').innerHTML = board.midRight.left;
					document.getElementById('cell6_right').innerHTML = board.midRight.right;
					document.getElementById('cell6_down').innerHTML = board.midRight.down;
					break;

				case 7:
					this.botLeft.up = up;
					this.botLeft.left = left;
					this.botLeft.right = right;
					this.botLeft.down = down;

					document.getElementById('cell7_up').innerHTML = board.botLeft.up;
					document.getElementById('cell7_left').innerHTML = board.botLeft.left;
					document.getElementById('cell7_right').innerHTML = board.botLeft.right;
					document.getElementById('cell7_down').innerHTML = board.botLeft.down;
					break;

				case 8:
					this.botCenter.up = up;
					this.botCenter.left = left;
					this.botCenter.right = right;
					this.botCenter.down = down;

					document.getElementById('cell8_up').innerHTML = board.botCenter.up;
					document.getElementById('cell8_left').innerHTML = board.botCenter.left;
					document.getElementById('cell8_right').innerHTML = board.botCenter.right;
					document.getElementById('cell8_down').innerHTML = board.botCenter.down;
					break;

				case 9:
					this.botRight.up = up;
					this.botRight.left = left;
					this.botRight.right = right;
					this.botRight.down = down;

					document.getElementById('cell9_up').innerHTML = board.botRight.up;
					document.getElementById('cell9_left').innerHTML = board.botRight.left;
					document.getElementById('cell9_right').innerHTML = board.botRight.right;
					document.getElementById('cell9_down').innerHTML = board.botRight.down;
					break;

			}
		}


	},
	c = [],
	turnEven = true,
	curPlayer,
	promptCard,
	promptCell,
	selectedCard,
	selectedCell;

//Game flow
generatePlayers();
assignCards();
while(board.emptySpaces > 0){
	curPlayer = turnEven ? player[0]: player[1];
	logHand(curPlayer);
	renderHand(curPlayer);
	promptCard = prompt("Select card 0,1,2,3, or 4");
	console.log(promptCard);
	selectedCard = convertPromptedCard(promptCard);
	promptCell = prompt("Select space 1,2,3,4,5,6,7,8,9");
	selectedCell = convertPromptedCell(promptCell);
	// if (typeof(selectedCell) != 'undefined' && typeof(selectedCard) != ''){
		// console.log(selectedCell);
		// console.log(selectedCard);
		board.setCell(selectedCell, selectedCard);
		board.emptySpaces--;
		// turnEven = !turnEven;
	//  selectedCard = undefined;
	// 	selectedCell = undefined;
	// }
		
}
outcome(player[0].capturedCards, player[1].capturedCards);


//Generate players
function generatePlayers(){
	for (var i=0; i < 2; i++){
		player[i] = {
			deck: {},
			capturedCards: 0
		}
	}
}

function assignCards(){
	//Generate ten cards
	for (var i=0; i < 10; i++){
		c[i] = {
			up: i,
			down: i,
			left: i,
			right: i
		}
	}

	//Assign cards to players
	player[0].deck = assign(c);
	player[1].deck = c;
}

//Randomly assign cards to a deck
function assign(cards){
	var randomIndex,
		deck = [];
	for(var i=0; i<5; i++){
		randomIndex = Math.floor(Math.random() * cards.length);
		deck.push(cards.splice(randomIndex, 1));
	}
	return deck;		
}

function logHand(player){
	for(var i=0; i < 5; i++){
		console.log("Card " + i + ": ");
		renderCard(player, i);
	}
}

//Updates values of displayed hand (below board)
function renderHand(playerIndex){
	var cards = [['card0_up', 'card0_down', 'card0_left', 'card0_right'],
		['card1_up', 'card1_down', 'card1_left', 'card1_right'],
		['card2_up', 'card2_down', 'card2_left', 'card2_right'],
		['card3_up', 'card3_down', 'card3_left', 'card3_right'],
		['card4_up', 'card4_down', 'card4_left', 'card4_right']
	];

	for (var i=0; i < 5; i++){
		document.getElementById(cards[i][0]).innerHTML = playerIndex.deck[i][0].up;
		document.getElementById(cards[i][2]).innerHTML = playerIndex.deck[i][0].left;
		document.getElementById(cards[i][3]).innerHTML = playerIndex.deck[i][0].right;
		document.getElementById(cards[i][1]).innerHTML = playerIndex.deck[i][0].down;
	}
}	

function convertPromptedCard(card){
	console.log(card);
	switch(card){
		case '0':
			selectedCard = c[0];
			break;
		case '1':
			console.log("Case 1");
			selectedCard = c[1];
			break;
		case '2':
			selectedCard = c[2];
			break;
		case '3':
			selectedCard = c[3];
			break;
		case '4':
			selectedCard = c[4];
			break;
		}
		// console.log(selectedCard);
		return selectedCard;
}

function convertPromptedCell(cell){
	console.log(cell);
	switch(cell){
		case "1":
			selectedCell = 1;
			break;
		case "2":
			selectedCell = 2;
			break;
		case "3":
			selectedCell = 3;
			break;
		case "4":
			selectedCell = 4;
			break;
		case "5":
			selectedCell = 5;
			break;
		case "6":
			selectedCell = 6;
			break;
		case "7":
			selectedCell = 7;
			break;
		case "8":
			selectedCell = 8;
			break;
		case "9":
			selectedCell = 9;
			break;
	}
	return selectedCell;
}
//Update selected card
$('.hand').on('click', function(){
	switch(this.id){
		case "card0":
			selectedCard = c[0];
			break;
		case "card1":
			selectedCard = c[1];
			break;
		case "card2":
			selectedCard = c[2];
			break;
		case "card3":
			selectedCard = c[3];
			break;
		case "card4":
			selectedCard = c[4];
			break;
		}
	console.log(selectedCard);
});


//Update selected card
$('.cell').on('click', function(){
	switch(this.id){
		case "cell1":
			selectedCell = 1;
			break;
		case "cell2":
			selectedCell = 2;
			break;
		case "cell3":
			selectedCell = 3;
			break;
		case "cell4":
			selectedCell = 4;
			break;
		case "cell5":
			selectedCell = 5;
			break;
		case "cell6":
			selectedCell = 6;
			break;
		case "cell7":
			selectedCell = 7;
			break;
		case "cell8":
			selectedCell = 8;
			break;
		case "cell9":
			selectedCell = 9;
			break;
	}
	console.log(selectedCell);
});

function updateCell(cell, card){
	cell.innerHTML = player[0].deck[0][0].up;
}


$('#test').on('click', function(){
	console.log($('#board').find('.cell'));
});

function renderCard(player, index){
	console.log(player.deck[index][0]);
}

// TODO: Fix this, it's horrible
// Place card on board
function place(card, location){
	// top
	if (location === 1){
		board.topLeft = card;
	}

	else if (location === 2){
		board.topCenter = card;
	}

	else if (location === 3){
		board.topRight = card;
	}

	// middle
	else if (location === 4){
		board.midLeft = card;
	}

	else if (location === 5){
		board.midCenter = card;
	}

	else if (location === 6){
		board.midRight = card;
	}

	// bottom
	else if (location === 7){
		board.botLeft = card;
	}

	else if (location === 8){
		board.botCenter = card;
	}

	else if (location === 9){
		board.botRight = card;
	}

	logBoard();
}

// Direct attack
function rule1(attacker, defender, direction){
	var atk, def;
	switch(direction){
		case "up":
			atk = attacker.up;
			def = defender.down;
			break;	
		case "down":
			atk = attacker.down;
			def = defender.up;
			break;
		case "right":
			atk = attacker.right;
			def = defender.left;
			break;	
		case "left":
			atk = attacker.left;
			def = defender.right;
			break;	
		default:
			alert("rule1 Error");
	}

	if(atk >= def){
		console.log("Attacker Wins");
	}

	else{
		console.log("Attacker lost");
	}

}

function outcome(zeroCaptured, oneCaptured){
	if (zeroCaptured > oneCaptured){
		console.log("Player[0] Wins");
	}

	else if (zeroCaptured < oneCaptured){
		console.log("Player[1] Wins");
	}

	else{
		console.log("Draw");
	}
}

// // DEV
function logBoard(){
	console.log(board);
}