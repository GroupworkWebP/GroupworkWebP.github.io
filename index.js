var PlayerData=[];
var player_guess =[];
var player_amount  = 100;
var player_hand = 0
var cpu_amount = 100;
var cpu_hand = 0;
var chances = 3;

function Register() {
var name = document.forms["RegForm"]["FName"];
var lname = document.forms["RegForm"]["LName"];
var email = document.forms["RegForm"]["EMail"];
var userinput= document.forms["RegForm"]["date"];  
if (name.value == "") {
window.alert("Please enter your First Name.");
name.focus();
return false;
}
if (lname.value == "") {
window.alert("Please enter your Last Name.");
name.focus();
return false;
}
if(userinput==null || userinput==''){
window.alert("Please enter your Date of Birth.");
return false;  
}
if (email.value == ""){
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
if(document.getElementById("dot-1").checked==false &&document.getElementById("dot-2").checked==false){
window.alert("Please Select a Gender!!");
return false;
}
Disableform();
AddData();
return true;
}

function AddData(){
var fname = document.getElementById("FName").value;
var lname =document.getElementById("LName").value;
var email = document.getElementById("EMail").value;
var dob = document.getElementById("date").value;
PlayerData.push("First Name:"+name);
PlayerData.push("Last Name:"+lname);
PlayerData.push("Age:"+ageCalculator());
PlayerData.push(dob);
PlayerData.push(email);
if(document.getElementById("dot-1").checked==true){
PlayerData.push("male");
}
else if(document.getElementById("dot-2").checked==true){
PlayerData.push("female");
}
}

function ageCalculator() {
var dobb = document.getElementById("date").value;  
var dob = new Date(dobb);

//calculate month difference from current date in time  
var month_diff = Date.now() - dob.getTime();  
 
//convert the calculated difference in date format  
var age_dt = new Date(month_diff);  
 
//extract year from date      
var year = age_dt.getUTCFullYear();  
 
//now calculate the age of the user  
var age = Math.abs(year - 1970);  
 
//display the calculated age
document.getElementById("age").innerHTML = age;  
//give the id an value
return age;
}
function Disableform(){// disabled the iput areas for the form,( it enables after register is clicked)
document.getElementById('register').disabled =true;
document.getElementById('FName').disabled=true;
document.getElementById('LName').disabled=true;
document.getElementById('date').disabled=true;
document.getElementById('EMail').disabled=true;
document.getElementById('dot-1').disabled=true;
document.getElementById('dot-2').disabled=true;
document.getElementById('play').disabled=false;
document.getElementById('quit').disabled=false;
document.getElementById('guess').disabled=false;
document.getElementById('playagain').disabled=false;
document.getElementById('score').disabled=false;
}
			
function formEnable(){// is the opposite of the first function ansd it reset the form
document.getElementById("RegForm").reset();//reset the form
document.getElementById('register').disabled =false;
document.getElementById('FName').disabled=false;
document.getElementById('LName').disabled=false;
document.getElementById('date').disabled=false;
document.getElementById('EMail').disabled=false;
document.getElementById('dot-1').disabled=false;
document.getElementById('dot-2').disabled=false;
document.getElementById('play').disabled=true;
document.getElementById('quit').disabled=true;
document.getElementById('guess').disabled=true;
document.getElementById('playagain').disabled=true;
document.getElementById('score').disabled=true;
//put the PlayersData in the array
PlayersData = [fname, lname, email, dob, age]; // placing info into the Global variable
console.log(PlayersData);
}

//Code for Play Area Begins

function cpuHand(){// we have 3 tries
	cpu_hand = Math.floor(Math.random()*cpu_amount)+1; //randomly generate a number between 1 and the CPU's amount of kernels.
	console.log("CPU Amount: " + cpu_amount);
	console.log("CPU Hand: " + cpu_hand);
}

function PlayGame() {// randomly generates the number for the game
window.alert("SHIP SAIL, SHIP SAIL, OW MUCH MAN DEH PON BOARD?!");
window.alert("Guess Ow much man deh pon board!");

cpuHand();
}

function CheckGuess(){
player_guess= document.getElementById('guess').value; //get the value from the player's guess
while(chances > 0){
		console.log("Chances" + chances);
		if(player_guess == cpu_hand){ // if we guess right
		player_amount += cpu_hand; // add the guess to the player amount
		cpu_amount -= cpu_hand; // subtract the guess from the CPU's amount
		alert("You guessed right!")
		console.log("Player Amount: " + player_amount + "\n CPU Amount: " + cpu_amount);
		}
		else if(player_guess > cpu_hand)
		{
		alert("Try a lower number;");
		chances -= 1; // number of chances gets lowered by 1
		}
		else
		{
		alert("Try a lower number;");
		chances -= 1; // number of chances gets lowered by 1
		}
	}
}
       
function enablePlayArea(){
document.getElementById('user').disabled=false;
document.getElementById('guess').disabled=false;
document.getElementById('playagain').disabled = false;
}

// show results function starts
function findPercentageScore(){
var fName, lName, perentage;
var today = new Date();  
var day=today.getDate();  
var month=today.getMonth()+1;  
var year=today.getFullYear();
fName = document.getElementById('FName').value;
lName = document.getElementById('LName').value;
percentage = (cor_count / t_count) * 100;
document.getElementById('showpercentage').innerHTML = " ";
document.getElementById('showpercentage').innerHTML = "Player's Name: "+fName +" "+ lName + "\nTotal Questions: "+t_count +
"\nCorrect Answers: " + cor_count + "\nScore Percentage: " + percentage.toFixed(1) + "%\nDate: " + day+"/"+month+"/"+year;
console.log(PlayerData);
showallplayers();
}

function showallplayers(){//start function
var i;
document.getElementById('showallplayers').innerHTML = "";
for (i=0;i<3;i++){
document.getElementById("showallplayers").innerHTML += PlayerData[i]+", " ;
}
for (i=6;i<PlayerData.length;i++){
document.getElementById("showallplayers").innerHTML += PlayerData[i]+",\n " ;
}  
for (i=9;i<3;i++){
document.getElementById("showallplayers").innerHTML += PlayerData[i]+",\n " ;
}
//}
}

function QuitGame()
{
alert("Are you Sure?!");
console.log(PlayersData + "just checking!");
formEnable();
}
           		   
