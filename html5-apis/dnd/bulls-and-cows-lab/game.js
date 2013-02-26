(function(global) {

  var ColorMap = [
    'red',
    'blue',
    'green',
    'yellow',
    'black',
    'purple',
    'brown',
    'orange'
  ];

  var secret = 6213;
  var current_guess = 1;

  var GameBoard = function(el) {
    var self = this;

    var result_panels = el.querySelectorAll('.result-panel');
    var guess_digits  = [0,0,0,0], pending_guess_digit;
    var total_guesses = result_panels.length;

    var el_index = function( el ) {
      var idx = 3;
      while ( el = el.nextElementSibling ) {
        idx -= 1;
      }
      return idx;
    };

    self.check_guess = function(guess) {
      var secret_digits = String(secret).split('');
      var guess_digits  = String(guess).split('');
      console.dir( secret_digits );
      console.dir( guess_digits );
      var bulls = 0, cows = 0;

      for ( var i=0; i < secret_digits.length; i++ ) {
        for ( var j=0; j < guess_digits.length; j++ ) {
          if ( secret_digits[i] === guess_digits[j] ) {
            i === j ? bulls += 1 : cows += 1;
          }
        }
      }

      return {
        bulls: bulls,
        cows:  cows
      };
    };

    self.show_results = function(results) {
      result_panels[total_guesses - current_guess].innerHTML =
        results.bulls + ',' + results.cows;
    };


    self.start_guess = function() {
      pending_guess_digit = {
        color: this.getAttribute('class'),
        digit: this.dataset.digit
      };
    };

    self.play_guess = function() {
      if ( pending_guess_digit == null ) return;

      var current_row = el.querySelectorAll('.game-row')[total_guesses - current_guess];

      var next_digit  = current_row.querySelectorAll('.guess');
      var next_idx    = el_index( this );
      next_digit = next_digit[next_idx];

      next_digit.setAttribute('class', pending_guess_digit.color );

      guess_digits[next_idx] = pending_guess_digit.digit;

      if ( guess_digits.every(function(el) { return el !== 0 } ) ) {
        var result = self.check_guess( guess_digits.join('') );
        self.show_results( result );

        guess_digits = [0,0,0,0];
        current_guess += 1;
      }

      if ( current_guess >= total_guesses ) {
        alert("You Loose !");
      }

      pending_guess_digit = null;
    };
  };


  var board = new GameBoard(document.getElementById('gameboard'));


  var tokens = document.querySelectorAll('#playing-tokens div');
  for ( var i=0; i < tokens.length; i++ ) {
    tokens[i].addEventListener('click', board.start_guess );
  }

  var spots = document.querySelectorAll('.game-row div');
  for ( var i=0; i < spots.length; i++ ) {
    spots[i].addEventListener('click', board.play_guess );
  }

}(this));