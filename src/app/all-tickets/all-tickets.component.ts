import { Component } from '@angular/core';
import { ProxcyDataService } from '../services/proxcy-data.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent {
  ticketData:any;
  mainTicketData:any;
  constructor(private _ProxcyDataService:ProxcyDataService){
   
  }

  ngOnInit() {
    this._ProxcyDataService.showAssingData().subscribe((data)=>{
     this.ticketData=data;
      this.mainTicketData=data;
    })
  }
  allTicketData(){
   this.ticketData=this.mainTicketData
  }
  pendingTickeItem(){
    const pendingData = this.mainTicketData.filter((item:any) => item.status.toLowerCase() === 'pending');
    this.ticketData=pendingData;

  }

  closeTickeItem(){
    const colsedData = this.mainTicketData.filter((item:any) => item.status.toLowerCase() == 'closed');
    this.ticketData=colsedData;
  }
  rejectTickeItem(){
    const rejectData = this.mainTicketData.filter((item:any) => item.status.toLowerCase()  == 'reject');
    this.ticketData=rejectData;
  }

  duplicateTickeItem(){
    const duplicateData = this.mainTicketData.filter((item:any) => item.status.toLowerCase()  == 'duplicated');
    this.ticketData=duplicateData;
  }
}
