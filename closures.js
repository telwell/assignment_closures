
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  // For this one let's set up a function to 
  // assign a listener to a particular button
  var setupButton = function(num){
  	$(buttons[num]).on('click', function() {
			$('#clicked-btn').text('You clicked button #' + num);
		});
  }

  for (var i = 0; i < buttons.length; i++) {
  	// Now make sure to pass i in as the num 
  	// argument to our function. The problem was that 
  	// in the closure, each button had a reference to i
  	// but since i was being incremented it wasn't the proper
  	// i for that particular instance.
  	setupButton(i);
  }


}



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

assignments.two = function(){
	
	var cheerUp = function(viking){
		viking.mood = "Happy!";
		console.log("Cheered Up!")
	}

	// It looks like this particular problem was with using 'this'
	//  prior to this fix, when 'this' was called it was set as the global window.
	//  this obviously didn't change the mood. In this version though, this is being
	//  preserved in the closure as 'viking' in the cheerUp function so the reference
	//  now works properly.

  var viking = {  mood: undefined,
                  cheerUp: function(){
										console.log('sad');
										this.mood = "sad.";
										$('#mood').text(this.mood);

										//So what goes wrong here?
										setTimeout( cheerUp(this), 1000);
									}
								};



  viking.cheerUp();

  //waits an extra millisecond to make sure
  //that the other setTimeout has run.
  //The problem is NOT here
  setTimeout( function() {
    $('#mood').text(viking.mood);
  }, 1001);


};











// Don't touch this. Just the setup

$(document).ready(function(){

  assignments.one();
  assignments.two();


});