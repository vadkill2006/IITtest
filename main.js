
let beginDate = document.querySelector('#begindate');

let status1 = document.querySelector('#status');

let mytable = document.querySelector('.mytable');




// Sorting
th = document.getElementsByTagName('th');

for(let c=0; c < th.length; c++){

    th[c].addEventListener('click',item(c))
}


function item(c){

    return function(){
      console.log(c)
      sortTable(c)
    }
}


function sortTable(c) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  console.log(table);
  switching = true;
  
  while (switching) {    
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
    
      shouldSwitch = false;
    
      x = rows[i].getElementsByTagName("TD")[c];
      y = rows[i + 1].getElementsByTagName("TD")[c];
    
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {    
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {    
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}



// Filtering


function filterTable() {
    // Variables
    let dropdown, table, rows, filter;
    dropdown = document.getElementById("status");
   
    table = document.getElementById("myTable");
    rows = table.querySelectorAll("tbody tr");
    filter = dropdown.value;
    console.log(filter);

    

    
    for (let row of rows) { 
    
      newStatus = row.children[6].children[0] ; 
      newClient = row.children[1]
  
      console.log(filter === newClient);

   
      if (filter == '' || filter === newStatus.textContent.toLowerCase()) {
        row.style.display = ""; 
        
        console.log(filter === newClient); 
      }
      else {
        row.style.display = "none"; 
       
      }
    }
  }


  function clientFilterTable() {
    // Variables
    let table, rows, filter;
    let client = document.getElementById('client');
    
    table = document.getElementById("myTable");
    rows = table.querySelectorAll("tbody tr");
    filter = client.value;
    console.log(filter);
    for (let row of rows) {       
      newClient = row.children[1]
   
      console.log(filter === newClient);
      if (filter == '' || filter === newClient.textContent.toLowerCase().replace(/ /g, "")) {
        row.style.display = ""; 
       
        console.log(filter === newClient); 
      }
      else {
        row.style.display = "none"; 
       
      }
    }
  }

 

