
/**
 * --------------------------------------
 * -------- READ ME!!!!!!!!!!!!!!! ------
 * --------------------------------------
 *  document.getElementById("window_screen_1").style.visibility = "none"; // Remove introduction Div, and begin game.
 * 
 * THIS WORT OF WORKS. WE WANT IT TO BE HIDDEN WHEN APP STARTS, BUT SHOW ONCE WE CLICK ON IT
 */


/*
*
* GLOBAL VARIABLES
*
*/


/**
 * Set default state of which door is winner
 */
let DoorOne = false;
let DoorTwo = false;
let DoorThree = false;


/**
 * Set this var to the initial door 
 */
let DoorChosen = 0;
let ifChange = 0


/**
 *
 * 
 * INITIALIZATION FUNCTIONS
 *  
 * 
 */


window.onload = function(){
    console.log("Starting JavaScript Framework...");

    document.getElementById("startupSounds").play(); // Start MP3 once window loads!

    console.log("Initializing Door Selections...");
    setGameParams();

    console.log("Onload functions complete!\n");
}


/**
 * Randomize what doors will contain a donkey
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/**
 * Function to randomize door selection
 */
function setGameParams(){

    /**
     * How to randomize:
     * -----------------
     * Select one of the three doors to have the prize.
     * The other two doors shall have the donkey.
     */

    winningDoor = getRndInteger(1,3);
    console.log("\n*********************************");
    console.log("(SECRET): WINNING DOOR IS ", winningDoor);
    console.log("\n*********************************");

    if (winningDoor == 1){
        DoorOne = true;
        return DoorOne;
    }
    else if (winningDoor == 2){
        DoorTwo = true;
        return DoorTwo;
    }
    else if (winningDoor == 3){
        DoorThree = true;
        return DoorThree;
    }
    else{
        console.log("ERROR: ATTEMPTED ASSIGNMENT OF DOOR NUMBER TO ONE THAT DOESN'T EXIST. CHECK SETGAMEPARAMS FUNCTION.");
    }

}


/**
 * 
 * 
 * STARTING THE GAME
 * 
 * 
 */

function gameStartTasks(){
    document.getElementById("window_screen_1").style.visibility = "visible"; // Remove introduction Div, and begin game.
}

function backgroundTasksForGameStart(){
    console.log("Introduction Button Clicked!");

    document.getElementById("startupSounds").pause(); // Stop MP3 once user is ready to begin the game!
    document.getElementById("startGame").style.visibility = "hidden"; // Remove introduction Div, and begin game.
    document.getElementById("startGame").style.display = "none";

    gameStartTasks();

    console.log("Ending Window 1...");
}

/**
 * 
 * 
 * Window Screen 1: Instructions to play:
 * 
 * Purpose: After launching introduction, a new div will appear giving the user some 
 * directions on how the game will be played. This will be a text box for their information
 */

function backgroundTasksForWindowScreen2(){
    console.log("Window 2 button clicked!");

    document.getElementById("window_screen_1").style.visibility = "hidden";
    document.getElementById("window_screen_1").style.display = "none";

    document.getElementById("window_screen_2").style.visibility = "visible";

    console.log("Ending Window 2...");
}

/**
 * 
 * 
 * Window Screen 2: User Selects initial option
 * 
 * Purpose: There will be three options that the user is presented with.
 * After user clicks option, go to Window Screen 3
 * 
 */


function backgroundTasksForWindowScreen3(){
    console.log("Window 3 button clicked!")

    document.getElementById("window_screen_2").style.visibility = "hidden";
    document.getElementById("window_screen_2").style.display = "none";

    document.getElementById("window_screen_3").style.visibility = "visible";

    console.log("Ending Window 3...");
}


function userInitSelectsDoorOne(){
    console.log("User inititially has chosen Door One");
    console.log(DoorOne);

    if (DoorOne == false){
        console.log("User doesn't know that currently he has chosen a door that doesn't have the grand prize");
    }

    if (DoorOne == true){
        console.log("Currently user has chosen the only door that's correct!");
    }

    DoorChosen = 1;

    backgroundTasksForWindowScreen3();
}


function userInitSelectsDoorTwo(){
    console.log("User inititially has chosen Door Two");
    console.log(DoorTwo);

    if (DoorTwo == false){
        console.log("User doesn't know that currently he has chosen a door that doesn't have the grand prize");
    }

    if (DoorTwo == true){
        console.log("Currently user has chosen the only door that's correct!");
    }

    DoorChosen = 2;

    backgroundTasksForWindowScreen3();
}


function userInitSelectsDoorThree(){
    console.log("User inititially has chosen Door Three");
    console.log(DoorThree);

    if (DoorThree == false){
        console.log("User doesn't know that currently he has chosen a door that doesn't have the grand prize");
    }

    if (DoorThree == true){
        console.log("Currently user has chosen the only door that's correct!");
    }

    DoorChosen = 3;

    backgroundTasksForWindowScreen3();
}


/**
 * 
 * 
 * Window Screen 3.A: User Selects second option
 * 
 * Purpose:  
 * 
 */


function userInitOptionChosen(){
    console.log("Show user door that they chose...")
    document.getElementById("showOptionChosen").innerHTML = "You have chosen Door: " + DoorChosen;
}

function backgroundTasksForWindowScreen3A(){
    console.log("Window Button 3A clicked!");

    document.getElementById("window_screen_3").style.visibility = "hidden";
    document.getElementById("window_screen_3").style.display = "none";

    document.getElementById("window_screen_3a").style.visibility = "visible";

    console.log("Ending Window 3...");
}

function userClickToRevealFakeOption(){
    /**
     * 
     * Pick one of the thwo options of the door that it's not,
     * Display the door image to the user and play a sound!
     * 
     * 
     * ***********
     * Truth Table
     * ***********
     * Door Clicked: 1
     * Right Answer: 1
     * SHOW DOOR 2/3
     * 
     * Door Clicked: 1
     * Right Answer: 2/3
     * SHOW OPPOSITE DOOR (3/2)
     * 
     * Door CLicked: 2
     * Right Answer: 2
     * SHOW DOOR 1/3
     * 
     * Door Clicked: 2
     * Right Answer: 1/3
     * SHOW OPPOSITE DOOR (3/1)
     * 
     * Door Clicked: 3
     * Right Answer: 3
     * SHOW DOOR 1/2
     * 
     * Door Clicked: 3
     * Right Answer: 1/2
     * SHOW OPPOSITE DOOR (2/1)
     * 
     */

    if (DoorChosen == 1){
        if (DoorOne == true){ /** Can display 2 or 3 */
            document.getElementById("showFakeOptionImage").innerHTML = '<img class="text-center" src="Assets/Images/lets-make-a-deal-door-2.jpg" alt="Door Number 2"><p class="text-center">Door 2 is fake!</p></img>';
            console.log("USERCHANGE = 3");
            ifChange = 3;
        }
        else if (DoorTwo == true){ /** Can display 3 */
            document.getElementById("showFakeOptionImage").innerHTML = '<img class="text-center" src="Assets/Images/lets-make-a-deal-door-3.jpg" alt="Door Number 3"><p class="text-center">Door 3 is fake!</p></img>';
            console.log("USERCHANGE = 2");
            ifChange = 2;
        }
        else{ /** Can display 2 */
            document.getElementById("showFakeOptionImage").innerHTML = '<img class="text-center" src="Assets/Images/lets-make-a-deal-door-2.jpg" alt="Door Number 2"><p class="text-center">Door 2 is fake!</p></img>';
            console.log("USERCHANGE = 3");
            ifChange = 3;
        }
    }

    if (DoorChosen == 2){
        if (DoorOne == true){ /** Can display 3 */
            document.getElementById("showFakeOptionImage").innerHTML = '<img class="text-center" src="Assets/Images/lets-make-a-deal-door-3.jpg" alt="Door Number 3"><p class="text-center">Door 3 is fake!</p></img>';
            console.log("USERCHANGE = 1");
            ifChange = 1;
        }
        else if (DoorTwo == true){ /** Can display 1 or 3 */
            document.getElementById("showFakeOptionImage").innerHTML = '<img class="text-center" src="Assets/Images/lets-make-a-deal-door-1.jpg" alt="Door Number 1"><p class="text-center">Door 1 is fake!</p></img>';
            console.log("USERCHANGE = 3");
            ifChange = 3;
        }
        else{ /** Can display 1 */
            document.getElementById("showFakeOptionImage").innerHTML = '<img class="text-center" src="Assets/Images/lets-make-a-deal-door-1.jpg" alt="Door Number 1"><p class="text-center">Door 1 is fake!</p></img>';
            console.log("USERCHANGE = 3");
            ifChange = 3;
        }
    }

    if (DoorChosen == 3){
        if (DoorOne == true){ /** Can display 2 */
            document.getElementById("showFakeOptionImage").innerHTML = '<img class="text-center" src="Assets/Images/lets-make-a-deal-door-2.jpg" alt="Door Number 2"><p class="text-center">Door 2 is fake!</p></img>';
            console.log("USERCHANGE = 1");
            ifChange = 1;
        }
        else if (DoorTwo == true){ /** Can display 1 */
            document.getElementById("showFakeOptionImage").innerHTML = '<img class="text-center" src="Assets/Images/lets-make-a-deal-door-1.jpg" alt="Door Number 1"><p class="text-center">Door 1 is fake!</p></img>';
            console.log("USERCHANGE = 2");
            ifChange = 2;
        }
        else{ /** Can display 1 or 2 */
            document.getElementById("showFakeOptionImage").innerHTML = '<img class="text-center" src="Assets/Images/lets-make-a-deal-door-2.jpg" alt="Door Number 2"><p class="text-center">Door 2 is fake!</p></img>';
            console.log("USERCHANGE = 1");
            ifChange = 1;
        }
    }
    
}


/**
 * 
 * 
 * Window Screen 4: Show reults
 * 
 * Purpose:  
 * 
 */

function backgroundTasksForWindowScreen4(){
    console.log("Window Button 4 clicked!");

    document.getElementById("window_screen_3a").style.visibility = "hidden";
    document.getElementById("window_screen_3a").style.display = "none";

    document.getElementById("window_screen_4").style.visibility = "visible";

    console.log("Ending Window 3a...");
}

function checkForWinner(){
    /**Internal check to see if user got it right */
    if (DoorChosen == 1 && DoorOne == true){
        console.log("USER WON!");
    }
    else if (DoorChosen == 2 && DoorTwo == true){
        console.log("USER WON!");
    }
    else if (DoorChosen == 3 && DoorThree == true){
        console.log("USER WON!");
    }
    else{
        console.log("User lost");
    }
}

function userKeepsAnswer(){
    backgroundTasksForWindowScreen4();
    checkForWinner();
}

function userChangeAnswer(){
    backgroundTasksForWindowScreen4();

    DoorChosen = ifChange;

    checkForWinner();
}