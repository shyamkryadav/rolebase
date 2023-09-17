import { Component } from '@angular/core';
import { ProxcyDataService } from '../services/proxcy-data.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-ovredue-ticket',
  templateUrl: './ovredue-ticket.component.html',
  styleUrls: ['./ovredue-ticket.component.css']
})
export class OvredueTicketComponent {

  ticketData:any;
  mainTicketData:any;
  sliderValue: number = 30; // Initial value
   currentDate = new Date();

   ticketDate: any;
  remainingDays: number | undefined;


  constructor(private _ProxcyDataService:ProxcyDataService){
  }

  ngOnInit() {
    this._ProxcyDataService.showAssingData().subscribe((data)=>{
     this.ticketData=data;
      this.mainTicketData=data;
    })
   
  }

  updateValue(event: any) {
    const currentDateAsString = this.currentDate;
    console.log(currentDateAsString); 
    this.sliderValue = event.target.value;
    const overdueDate = this.mainTicketData.filter((item:any) => item.id > this.sliderValue  );
    console.log(overdueDate.dueDate)
    this.ticketData=overdueDate;
  }
}
