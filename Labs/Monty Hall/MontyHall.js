/*
*
* *****************
* GLOBAL VARIABLES
* *****************
*
*/

/**
 * ------------------
 * DOOR READYSTATE(S)
 * ------------------
 * 
 * If door is set to True,
 * the program recognizes it as the "winning door".
 * 
 * If door is set to False,
 * tje program recognizes it as the "losing door(s)"
 *  
*/
let DoorOne = false;
let DoorTwo = false;
let DoorThree = false;

/**
 * ------------------------
 * USER SELECTION VARIABLES
 * ------------------------
 * 
 * DoorChosen is the initial option (door) that the user 
 * chooses when presented with all the doors (1,2,3).
 * 
 * ifChange is the last available result at the end of the program.
 * The user chooses one of the three doors,
 * the program chooses one of the doors that the user didn't pick
 * but is invalid,
 * and ifChange, the the complimentary option left after running the above.
*/
let DoorChosen = 0;
let ifChange = 0


/**
 *
 * ************************
 * INITIALIZATION FUNCTIONS
 * ************************ 
 * 
 * Below are the functions that shall play once the window has been loaded.
 * This assume all HTML/CSS/JS has been loaded, 
 * and the DOM has been activated.
*/

/**
 * -------------
 * WINDOW ONLOAD
 * -------------
 *  
 * Below are the functions that shall play once the window has been loaded.
 * This assume all HTML/CSS/JS has been loaded, 
 * and the DOM has been activated.
 */
window.onload = function(){
    console.log("Starting JavaScript Framework...");

    document.getElementById("startupSounds").play(); // Start MP3 once window loads!

    console.log("Initializing Door Selections...");
    setGameParams();

    console.log("Onload functions complete!\n");
}

/**
 * ----------------
 * INIT GAME PARAMS
 * ----------------
 * 
 * Below are two functions:
 * 
 * getRndInt is a building block of a function to 
 * figure out (randomly) which number to pick (from 1 to 3)
 * 
 * SetGameParams are the "rules of the game".
 * It uses the building block function to figure out which
 * one of the doors to make the "true" door,
 * and set their respective READYSTATE.
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

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
 * ***************************
 * PROCESSES TO START THE GAME
 * ***************************
 * 
 * Below are the functions needed to hide the current window,
 * and display the next window.
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
 * **************************************
 * Window Screen 1: Instructions to play:
 * **************************************
 * 
 * After launching introduction (PROCESSES TO START THE GAME), a new div will appear giving the user some 
 * directions on how the game will be played. This will be a text box for their information.
 * 
 * Then hide intro window, show Window Screen 2.
 */
function backgroundTasksForWindowScreen2(){
    console.log("Window 2 button clicked!");

    document.getElementById("window_screen_1").style.visibility = "hidden";
    document.getElementById("window_screen_1").style.display = "none";

    document.getElementById("window_screen_2").style.visibility = "visible";

    console.log("Ending Window 2...");
}


/**
 * ********************************************
 * Window Screen 2: User Selects initial option
 * ********************************************
 * 
 * After Window Screen 1, the user is confronted with three choices,
 * Door 1, 2, and 3. 
 * The user shall select a door,
 * and this program will make a note of that via DoorChosen.
 * 
 * Then, hide Window Screen 2, show Window Screen 3.
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
 * **********************************************
 * Window Screen 3: User sees and confirms option
 * **********************************************
 * 
 * After the user clicks the second option, they get a confirmation screen
 * that they picked 'door number x'.
 */
function userInitOptionChosen(){
    console.log("Show user door that they chose...")
    document.getElementById("showOptionChosen").innerHTML = "You have chosen Door: " + DoorChosen;
}

/**
 * ------------------------------------------------
 * Window Screen 3a: The user confirms/changes door
 * ------------------------------------------------
 * 
 * After the user selects the option, they shall see what one of the other doors
 * are. This door is NOT the right answer, meaning the door they currently have,
 * or the other door that was not opened is the correct answer.
 * 
 * Promptly to this, the user shall be given the task of choosing which option to
 * pick, the door they currently have, or the other door.
 * 
 * Finally, hide Window Screen 3 (and/or Window Screen 3a), show Window Screen 4.
 */
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
     * ++++++++++++++
     * Truth Table
     * ++++++++++++++
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
 * ****************************
 * Window Screen 4: Show reults
 * ****************************
 * 
 * After the user is done finalizing door selection,
 * they shall be shown whether they won the prize (or not).
 * 
 * Then, prompt the user to play again!
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