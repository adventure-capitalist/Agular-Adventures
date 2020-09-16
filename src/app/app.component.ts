import { Component, OnInit } from '@angular/core';
import * as data from '../assets/customers.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  expandContent = true;
  title = 'Angular Test';

  customers: any = (data as any).default;

  tableHeaders = [{propertyName: "Number", value: "customernumber"}, {propertyName: "Name", value: "fullname"}, 
                  { propertyName: "Status", value: "theStatus"}, 
                  {propertyName: "Payment Type", value: "paymentType"}, { propertyName:"First Contact", value: "firstcontact"} ];

  sort = (colName) => {
    this.customers.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
};



sortRows = () => {
  // Declare variables
  var input, filter, table, tr, i
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().includes(filter)){
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

filterByContract = () => {
    // Declare variables
    var contractTypeFilter, table, tr, i
    contractTypeFilter = document.getElementById("statusFilter");
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        let txtValue = td.textContent || td.innerText;
        
        if (txtValue.includes(contractTypeFilter.value)){
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}


filterByPayment = () => {
  // Declare variables
  var paymentTypeFilter, table, tr, i
  paymentTypeFilter = document.getElementById("paymentFilter");
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.includes(paymentTypeFilter.value)){
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

  ngOnInit(){
    console.log(data);
    console.log(this.tableHeaders)
    console.log(this.sort)
  };
}