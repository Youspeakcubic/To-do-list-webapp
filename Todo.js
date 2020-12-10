//This small snippet just gets the current date and displays it to the date element.
var currentDate  = new Date(),
    currentDay   = currentDate.getDate()
    currentMonth = currentDate.getMonth()
document.getElementById("date").innerHTML = `${currentDay}  /  ${currentMonth}  /   ${currentDate.getFullYear()}`;
// addToList acquires the input and list container by id and adds the value of the input and add it to the current contents of the list container, when add to list button is clicked.
function addToList() {
  var inp = document.getElementById("item").value;
  var list =document.getElementById("list").innerHTML;
  //if statement that does not allow the function to proceed if the input form is empty.
  if (document.getElementById("item").value == '') {
    document.getElementById("item").placeholder = 'Please enter something';
  }
  else {
    document.getElementById("list").innerHTML = `${list} <h2 class="animate__fadeInRight" style ="font-family: 'Nerko One', cursive; font-size:45px;"> -${inp} </h2> `;
    document.getElementById("item").value = "";
    document.getElementById("item").placeholder = 'What do i need to do?';
  }
}
//Save entries function creates a local storage and then take the html of the list container and saves it as the saveList key.
function saveEntries() {
  var finalList = document.getElementById("list");
  localStorage.setItem('saveList' , finalList.innerHTML);
}
//Load list function take previously saved saveList key and inserts it to the list container.
function loadList() {
  document.getElementById("list").innerHTML = localStorage.getItem('saveList');
}
