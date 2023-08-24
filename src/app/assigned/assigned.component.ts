import { Component } from '@angular/core';



export interface PeriodicElement {
  title: string;
  priority: string;
  status: string;
  dueDate: string;
  department:String;
  requestType:String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'parking pass', priority: 'High', status:'Closed', dueDate:'12/3/2021',department:'it',requestType:"Parking"},

]

@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.component.html',
  styleUrls: ['./assigned.component.css']
})
export class AssignedComponent {
  displayedColumns: string[] = ['title', 'priority', 'status', 'dueDate','department','requestType'];
  dataSource = ELEMENT_DATA;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // dataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue)
  }

}
