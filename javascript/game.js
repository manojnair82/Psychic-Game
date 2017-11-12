
	// initalize variables
	var gLeft=0;
	var wins=0;
	var Losses=0;
	var gLeft=5;
	var display=[];

	function clearall(){
		gLeft=0;
		wins=0;
		Losses=0;
		gLeft=5;
		display=[];
		document.getElementById('gLeft').innerHTML = gLeft;
		document.getElementById('wins').innerHTML = wins;
		document.getElementById('Losses').innerHTML = Losses;
		document.getElementById('guesses').innerHTML = display;
		generaterand();
	}

	//possible random selections
	var possible = "abcdefghijklmnopqrstuvwxyz";
	function generaterand(){
	text = possible.charAt(Math.floor(Math.random() * possible.length));
	}
	generaterand();

	//start checking for match on click
	document.onkeyup = function(event){
		guesses = event.key;
		display.push(event.key);
		gLeft--;
		document.getElementById('gLeft').innerHTML = gLeft;
		document.getElementById('guesses').innerHTML=display;
		
		
		if (guesses===text) {
			wins++;
			alert("You guess was correct, you took "+display.length+" guesses to figure it out.");
			document.getElementById('wins').innerHTML = wins;
			gLeft=5;
			document.getElementById('gLeft').innerHTML = gLeft;
			display=[];
			document.getElementById('guesses').innerHTML=display;
			generaterand();

		} else{
			console.log("you guessed "+guesses);
			if (gLeft===0) {
				Losses++;
			document.getElementById('Losses').innerHTML = Losses;
			// alert("You Lost");
			gLeft=5;
			document.getElementById('gLeft').innerHTML = gLeft;
				}
			}
		}


