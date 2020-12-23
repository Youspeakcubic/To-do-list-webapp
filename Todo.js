//This small snippet just gets the current date and displays it to the date element.
let currentDate = new Date(),
  currentDay = currentDate.getDate();
currentMonth = currentDate.getMonth();
document.getElementById(
  "date"
).innerHTML = `${currentDay}  /  ${currentMonth}  /   ${currentDate.getFullYear()}`;
let choice = document.getElementById("dropUp").value;
// addToList starts the adding process by checking the drop down value to see which list container to send the input to
function addToList(choice) {
  let inp = document.getElementById("item").value;
  let list = document.getElementById(`${choice}`); // choice is the value of the the drop down menu which we declared earlier in the file
  //if statement that does not allow the function to proceed if the input form is empty.
  if (document.getElementById("item").value == "") {
    document.getElementById("item").placeholder = "Please enter something";
  } else {
    // else statement updates choice value and adds the value of inp(Text in the input form) and adds it to the current list as a text node.
    choice = document.getElementById("dropUp").value;
    let node = document.createElement("LI");
    let textNode = document.createTextNode(`-${inp}`);
    node.appendChild(textNode);
    document.getElementById(`${choice}`).appendChild(node);
    document.getElementById("item").value = "";
    document.getElementById("item").placeholder = "What do i need to do?";
  }
}
// The save entries function first gets the html of all task containers and stores them in an array afterwards. The function then stores said array in localstorage as a json object.
function saveEntries() {
  let todayData = document.getElementById("Today").innerHTML;
  let tomorrowData = document.getElementById("Tommorow").innerHTML;
  let weekData = document.getElementById("Week").innerHTML;
  let monthData = document.getElementById("Month").innerHTML;
  let saveArray = [todayData, tomorrowData, weekData, monthData];
  localStorage.setItem("saveList", JSON.stringify(saveArray));
}
//Load list function gets the saved array from local storage and then sets each value in the array to the corresponding container.
function loadList() {
  saveListArray = JSON.parse(localStorage.getItem("saveList"));
  document.getElementById("Today").innerHTML = saveListArray[0];
  document.getElementById("Tommorow").innerHTML = saveListArray[1];
  document.getElementById("Week").innerHTML = saveListArray[2];
  document.getElementById("Month").innerHTML = saveListArray[3];
}
