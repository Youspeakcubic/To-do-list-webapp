const currentDate  = new Date(),
    currentDay   = currentDate.getDate()
    currentMonth = currentDate.getMonth()
document.getElementById("date").innerHTML = `${currentDay}  /  ${currentMonth}  /   ${currentDate.getFullYear()}`;
function textValidate() {
   if (){
      document.getElementById("item").placeholder = "You didnt write anything ";
      addToList()
  }
  else {
    addToList();
  }
}
function addToList(){
  var inp = document.getElementById("item").value;
  var list =document.getElementById("list").innerHTML;
  document.getElementById("list").innerHTML = `${list} <h2 style ="font-family: 'Nerko One', cursive; font-size:45px;"> -${inp} </h2> `;
  document.getElementById("item").value = "";
}
