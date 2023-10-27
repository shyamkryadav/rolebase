import { Component, ViewChild } from '@angular/core';
import { ProxcyDataService } from '../services/proxcy-data.service';
import { DateAdapter } from '@angular/material/core';
import { filter, from, toArray } from 'rxjs';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { CdkVirtualScrollableWindow } from '@angular/cdk/scrolling';



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
  id:any;

  constructor(private _ProxcyDataService:ProxcyDataService,private _activatedRoute:ActivatedRoute ,private _router:Router){
   
  }

  ngOnInit() {
    this._ProxcyDataService.showAssingData().subscribe((data)=>{
     this.allValue=data;
     this.allvalueData=data
    //  console.log(this.allValue)
    })
    this.id=this._activatedRoute.snapshot.params['id']
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
  onEditClicked(id:any){
  }
  updateData(id:any){
    console.log(id)

  }

  printTable() {
    const tableContents = document.getElementById('print-table')!.outerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML != tableContents;
    window.print();

    // Restore the original content
    document.body.innerHTML = originalContents;
  }

  
}
