//This small snippet just gets the current date and displays it to the date element.
let currentDate  = new Date(),
    currentDay   = currentDate.getDate()
    currentMonth = currentDate.getMonth()
document.getElementById("date").innerHTML = `${currentDay}  /  ${currentMonth}  /   ${currentDate.getFullYear()}`;

// addToList starts the adding process by checking the drop down value to see which list container to send the input to
function addToList() {
  let dropDown = document.getElementById('dropUp').value;
  if (dropDown == 'Today') {
    addToListToday();
  }
  else if (dropDown == 'Tommorow') {
    addToListTommorow();
  }
  else if (dropDown == 'This week') {
    addToListThisWeek();
  }
  else if (dropDown =='This month') {
    addToListThisMonth();
  }
}
function addToListToday() {
  let inp = document.getElementById("item").value;
  let list =document.getElementById("list");
    //if statement that does not allow the function to proceed if the input form is empty.
  if (document.getElementById("item").value == '') {
    document.getElementById("item").placeholder = 'Please enter something';
  }
  else {
    let node =document.createElement("LI");
    let textNode = document.createTextNode(`-${inp}`);
    node.appendChild(textNode);
    document.getElementById("listToday").appendChild(node);
    document.getElementById("item").value = "";
    document.getElementById("item").placeholder = 'What do i need to do?';
  }
}
function addToListTommorow() {
  let inp = document.getElementById("item").value;
  let list =document.getElementById("list");
    //if statement that does not allow the function to proceed if the input form is empty.
  if (document.getElementById("item").value == '') {
    document.getElementById("item").placeholder = 'Please enter something';
  }
  else {
    let node =document.createElement("LI");
    let textNode = document.createTextNode(`-${inp}`);
    node.appendChild(textNode);
    document.getElementById("listTommorow").appendChild(node);
    document.getElementById("item").value = "";
    document.getElementById("item").placeholder = 'What do i need to do?';
  }
}
function addToListThisWeek() {
  let inp = document.getElementById("item").value;
  let list =document.getElementById("listThisWeek");
    //if statement that does not allow the function to proceed if the input form is empty.
  if (document.getElementById("item").value == '') {
    document.getElementById("item").placeholder = 'Please enter something';
  }
  else {
    let node =document.createElement("LI");
    let textNode = document.createTextNode(`-${inp}`);
    node.appendChild(textNode);
    document.getElementById("listThisWeek").appendChild(node);
    document.getElementById("item").value = "";
    document.getElementById("item").placeholder = 'What do i need to do?';
  }
}
function addToListThisMonth() {
  let inp = document.getElementById("item").value;
  let list =document.getElementById("listThisMonth");
    //if statement that does not allow the function to proceed if the input form is empty.
  if (document.getElementById("item").value == '') {
    document.getElementById("item").placeholder = 'Please enter something';
  }
  else {
    let node =document.createElement("LI");
    let textNode = document.createTextNode(`-${inp}`);
    node.appendChild(textNode);
    document.getElementById("listThisMonth").appendChild(node);
    document.getElementById("item").value = "";
    document.getElementById("item").placeholder = 'What do i need to do?';
  }
}
//Save entries function takes the html of the list container and saves it as the saveList key, this is done for each of the containers.
function saveEntries() {
  let finalListToday = document.getElementById("listToday");
  let finalListTommorow = document.getElementById("listTommorow");
  let finalListThisWeek = document.getElementById("listThisWeek");
  let finalListThisMonth = document.getElementById("listThisMonth");
  localStorage.setItem('saveListToday' , finalListToday.innerHTML);
  localStorage.setItem('saveListTommorow' , finalListTommorow.innerHTML);
  localStorage.setItem('saveListThisWeek' , finalListThisWeek.innerHTML);
  localStorage.setItem('saveListThisMonth' , finalListThisMonth.innerHTML);
}
//Load list function take previously saved saveList keys and inserts it to the proper list container.
function loadList() {
  document.getElementById("listToday").innerHTML = localStorage.getItem('saveListToday');
  document.getElementById("listTommorow").innerHTML = localStorage.getItem('saveListTommorow');
  document.getElementById("listThisWeek").innerHTML = localStorage.getItem('saveListThisWeek');
  document.getElementById("listThisMonth").innerHTML = localStorage.getItem('saveListThisMonth');
}
