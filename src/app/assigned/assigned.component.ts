import { Component } from '@angular/core';
import { ProxcyDataService } from '../services/proxcy-data.service';
import { DateAdapter } from '@angular/material/core';



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
  allValue:any;
  constructor(private _ProxcyDataService:ProxcyDataService){
   
  }

  ngOnInit() {
    this._ProxcyDataService.showAssingData().subscribe((data)=>{
     this.allValue=data;
    })
  }

  // upadateData(id:string){
  //  let tickedId= this.allValue.find((p: { id: string; })=>{
  //     return  p.id ===id
  //   });
  //   console.log(tickedId)
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.allValue.filter = filterValue.trim().toLowerCase();
    // console.log(this.allValue) 
  }
  
}
