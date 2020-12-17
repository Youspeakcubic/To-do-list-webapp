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
  let list = document.getElementById(`${choice}`);
  console.log(`${choice}`);
  //if statement that does not allow the function to proceed if the input form is empty.
  if (document.getElementById("item").value == "") {
    document.getElementById("item").placeholder = "Please enter something";
  } else {
      choice = document.getElementById("dropUp").value;
      let node = document.createElement("LI");
      let textNode = document.createTextNode(`-${inp}`);
      node.appendChild(textNode);
      document.getElementById(`${choice}`).appendChild(node);
      document.getElementById("item").value = "";
      document.getElementById("item").placeholder = "What do i need to do?";
      console.log(dropUp.value);
  }
}
//Save entries function takes the html of the list container and saves it as the saveList key, this is done for each of the containers.
function saveEntries() {
  let finalListToday = document.getElementById("Today");
  let finalListTommorow = document.getElementById("Tommorow");
  let finalListThisWeek = document.getElementById("Week");
  let finalListThisMonth = document.getElementById("Month");
  localStorage.setItem("Today", finalListToday.innerHTML);
  localStorage.setItem("Tommorow", finalListTommorow.innerHTML);
  localStorage.setItem("Week", finalListThisWeek.innerHTML);
  localStorage.setItem("Month", finalListThisMonth.innerHTML);
}
//Load list function take previously saved saveList keys and inserts it to the proper list container.
function loadList() {
  document.getElementById("Today").innerHTML = localStorage.getItem(
    "saveListToday"
  );
  document.getElementById("Tommorow").innerHTML = localStorage.getItem(
    "saveListTommorow"
  );
  document.getElementById("Week").innerHTML = localStorage.getItem(
    "saveListThisWeek"
);
  document.getElementById("Month").innerHTML = localStorage.getItem(
    "saveListThisMonth"
  );
}
