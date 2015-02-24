$(document).ready(function() {
		var turn = 1;
		$("#player").text("turn: O");

		$('td').on('click', function() {

			var self = $(this);

			if(turn % 2 == 0){
				self.text("x")
				// self.addClass('x')
				var symbol = 'x'
				$("#player").text("turn: O");

			}
			else {
				self.text('o')
				// self.addClass('o')
				var symbol = 'o'
				$("#player").text("turn: X");
			}

			self.off('click');
			checkWin(symbol);
			turn++;
		});

		var checkWin = function(symbol){
			if (
				// Ways to win horizontally
				$("#box1").text() === symbol && $("#box2").text() === symbol && $("#box3").text() === symbol ||
				$("#box4").text() === symbol && $("#box5").text() === symbol && $("#box6").text() === symbol ||
				$("#box7").text() === symbol && $("#box8").text() === symbol && $("#box9").text() === symbol ||

				// Ways to win vertically
				$("#box1").text() === symbol && $("#box4").text() === symbol && $("#box7").text() === symbol ||
				$("#box2").text() === symbol && $("#box5").text() === symbol && $("#box8").text() === symbol ||
				$("#box3").text() === symbol && $("#box6").text() === symbol && $("#box9").text() === symbol ||
				
				// Ways to win diagonally
				$("#box1").text() === symbol && $("#box5").text() === symbol && $("#box9").text() === symbol ||
				$("#box3").text() === symbol && $("#box5").text() === symbol && $("#box7").text() === symbol
				)
			 {
				console.log("Player " + symbol.toUpperCase + " has won!");
				$('td').off('click')
			}
			else if (turn === 10) {
				alert("Tie Game! No Winner!")
			}
		} 



	});