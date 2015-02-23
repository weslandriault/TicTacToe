$(document).ready(function() {
		var turn = 1;
		$('td').on('click', function() {
			var self = $(this);

			if(turn % 2 == 0){
				self.text("x")
				self.addClass('x')
			
			}
			else {
				self.text('o')
				self.addClass('o')
			}

			
			self.off('click');
			checkWin(symbol);
			turn++;
		});

		var checkWin = function(symbol){
			
		} 



	});