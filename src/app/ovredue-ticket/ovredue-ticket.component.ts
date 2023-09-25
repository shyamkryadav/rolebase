import { Component } from '@angular/core';
import { ProxcyDataService } from '../services/proxcy-data.service';
import { filter } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ovredue-ticket',
  templateUrl: './ovredue-ticket.component.html',
  styleUrls: ['./ovredue-ticket.component.css']
})
export class OvredueTicketComponent {

  ticketData:any;
  mainTicketData:any;
  sliderValue: number = 25; // Initial value
  tickteDate :any;
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
//   this.tickteDate= this.mainTicketData.map((item:any)=>item.dueDate)
//   for(const iterator of this.tickteDate){
//   const overdueDate = this.mainTicketData.filter((item:any) => new Date(iterator).getDay() < this.sliderValue);
//   console.log(overdueDate.dueDate)
//   this.ticketData=overdueDate;
// }

  updateValue(event: any) {
    const currentDateAsString = this.currentDate;
    this.sliderValue = event.target.value;
    // console.log(currentDateAsString.getDay())
    // console.log(this.sliderValue)

    
    const overdueDate = this.mainTicketData.filter((item:any) => item.dueDate <= this.sliderValue);
    console.log(overdueDate.dueDate)
    this.ticketData=overdueDate;

  }

}


// }


// const overdueDate = this.mainTicketData.filter((item:any) => item.id > this.sliderValue);
//     console.log(overdueDate.dueDate)
//     this.ticketData=overdueDate;