import { Component } from '@angular/core';
import { ProxcyDataService } from '../services/proxcy-data.service';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent {
  ticketData:any;

  constructor(private _ProxcyDataService:ProxcyDataService){
   
  }

  ngOnInit() {
    this._ProxcyDataService.showAssingData().subscribe((data)=>{
     this.ticketData=data;
    // console.log(data)
    })
  }
  

}
