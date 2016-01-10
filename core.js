var player = {},
	board = {
		topLeft: "",
		topCenter: "",
		topRight: "",
		midLeft: "",
		midCenter: "",
		midRight: "",
		botLeft: "",
		botCenter: "",
		botRight: "",
		emptySpaces: 9
	},
	c = [],
	turnEven = true,
	cardSelected,
	cellSelected;


//Game flow
generatePlayers();
assignCards();
// while(board.emptySpaces !== 0){
	var curPlayer = turnEven ? player[0]: player[1];
	logHand(curPlayer);
	renderHand(curPlayer);
	// var card = prompt("Select your card: ");
	// var space = prompt("Select board space: ");
	board.emptySpaces--;
	turnEven = !turnEven;
// }
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

//Update selected card
$('.hand').on('click', function(){
	cardSelected = this;
	console.log(cardSelected);
});

//Update selected card
$('.cell').on('click', function(){
	cellSelected = this;
	console.log(cellSelected);
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