import { Component } from '@angular/core';
import { ProxcyDataService } from '../services/proxcy-data.service';
import { DateAdapter } from '@angular/material/core';
import { filter, from, toArray } from 'rxjs';
import { TitleStrategy } from '@angular/router';



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
  allvalueData:any;
  searchQuery: string = '';

  constructor(private _ProxcyDataService:ProxcyDataService){
   
  }

  ngOnInit() {
    this._ProxcyDataService.showAssingData().subscribe((data)=>{
     this.allValue=data;
     this.allvalueData=data
    //  console.log(this.allValue)
    })
    // this.filteredData()

  }
  highPriority(){
    const highData = this.allvalueData.filter((item:any) => item.priority === "High");
    this.allValue=highData;
    console.log(this.allValue)
  }
 normalPriority(){
    const normalData = this.allvalueData.filter((item:any) => item.priority === 'Normal');
    this.allValue=normalData;
    console.log(this.allValue)
  }


  applyFilter() {
    const filterValue = this.searchQuery.trim().toLowerCase();
    const filteredData = this.allvalueData.filter((item:any) =>
      item.title.toLowerCase().includes(filterValue) 
    );
    this.allValue=filteredData;

  }

  allPriority(){
    this.allValue=this.allvalueData;
  }

  upadateData(id:string){
    let tickedId= this.allValue.find((p: { id: string; })=>{
      return  p.id ===id
    });
    // console.log(tickedId)
  }


  
}
