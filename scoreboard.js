//All scorekeeping variables defined at 0         
var leftScore = 0; 
var rightScore = 0; 
var minutes = 0; 
var seconds = 0;  
var period = 1;
var clockPaused = true;  
var homePossession = false; 
var visitorPossession = false; 


//functions for adding and subtracting points from both sides 
function addLeft() { 
    leftScore++; 
    console.log(leftScore);
}

function subLeft() { 
    leftScore--; 
    console.log(leftScore);
} 

function addRight() { 
    rightScore++; 
    console.log(rightScore);
}

function subRight() { 
    rightScore--; 
    console.log(rightScore);
}      


//Functions for initial addition and subtraction of minutes to clock 
function addMins() { 
    minutes++;              
    if(seconds < 10) { 
        //console.log(minutes + ":0" + seconds);
    } else { 
        //console.log(minutes + ":" + seconds);
    }
}

function subMins() { 
    minutes--; 
    if(seconds < 10) { 
        //console.log(minutes + ":0" + seconds);
    } else { 
        //console.log(minutes + ":" + seconds);
    }
}

function addSecs() { 
    seconds++; 
     if(seconds < 10) { 
        //console.log(minutes + ":0" + seconds);
    } else { 
        //console.log(minutes + ":" + seconds);
    }
}

function subSecs() { 
    seconds--; 
    //console.log(minutes + ":" + seconds);
}


//function for starting & stoping time 
function timeToggle() { 
    if(clockPaused) { 
        clockPaused = false;
    } else { 
        clockPaused = true;
    }
}

//Function for switching possession (i.e. switching which team has the possession dot or neither team having the dot)
function switchPossession() { 
  if (homePossession) { 
      homePossession = false; 
      visitorPossession = true;
     //console.log("Visitor Possession");
  } else { 
      visitorPossession = false; 
      homePossession = true; 
      //console.log("No Possession");
  }
}


//Resets all data on the board 
function reset() { 
    document.location.reload();
}  
 

//function that updates the scoreboard & timekeeping interval 
var updateTime = 1000; 

window.setInterval('boardUpdate()', updateTime); 

function boardUpdate() {   

    //clock update conditionals (if clock is paused do nothing, else tick down a second every second)
    if(clockPaused) { 
        //console.log("Clock is paused");
    }else {     
       seconds--;
    }  

    //Finally, if seconds is less than 10, add a 0 before the digit for more pleasing astetic
    if(seconds < 10 && seconds >=0) { 
        //console.log(minutes + ":" + seconds);
        document.getElementById("timeNum").innerHTML = minutes + ":0" + seconds;
    } else { 
        //console.log(minutes + ":" + seconds);
        document.getElementById("timeNum").innerHTML = minutes + ":" + seconds;
    }

    //If seconds is less than 0, subtract a minute, and reset seconds to 59 
    if(seconds <= -1 && minutes > 0) { 
        minutes--; 
        document.getElementById("timeNum").innerHTML = minutes + ":59";
        seconds = 60;
    } else if (minutes <= 0 && seconds <= 0 && clockPaused == false) { 
        minutes = 0; 
        seconds = 0;
        document.getElementById("timeNum").innerHTML = "0:00"; 
        clockPaused = true; 
        period++;
    }

    //Display current scores, period, etc.
    document.getElementById("leftScore").innerHTML = leftScore;
    document.getElementById("rightScore").innerHTML = rightScore;
    document.getElementById("periodNum").innerHTML = period;   

    //Displays or hides possession dot based on possession status
    var leftDot = document.getElementById("leftPossDot");
    var rightDot = document.getElementById("rightPossDot");

     if(homePossession) { 
        leftDot.style.visibility = 'visible'; 
        rightDot.style.visibility = 'hidden'; 
        //console.log("leftDot is visible, possession");
    } else { 
        leftDot.style.visibility = 'hidden'; 
        rightDot.style.visibility = 'visible'; 
    }

    
}

