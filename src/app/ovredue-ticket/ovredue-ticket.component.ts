import { Component } from '@angular/core';
import { ProxcyDataService } from '../services/proxcy-data.service';

@Component({
  selector: 'app-ovredue-ticket',
  templateUrl: './ovredue-ticket.component.html',
  styleUrls: ['./ovredue-ticket.component.css']
})
export class OvredueTicketComponent {
  ticketData:any;
  mainTicketData:any;
  sliderValue: number = 25;
  tickteDate :any;
  currentDate = new Date();
  ticketDate: any;
  remainingDays: number | undefined;
  dueDateDay: any;
  constructor(private _ProxcyDataService:ProxcyDataService){
  }
  ngOnInit() {
    this._ProxcyDataService.showAssingData().subscribe((data)=>{
     this.ticketData=data;
      this.mainTicketData=data;
    })

  }
  updateValue(event: any) {
    // const currentDateAsString = this.currentDate;
    this.sliderValue = event.target.value;
    // console.log(currentDateAsString.getDay())

    const overdueDate = this.mainTicketData.filter((item:any) => item.dueDate >= this.sliderValue);
    console.log(overdueDate)
    this.ticketData=overdueDate;


    // const overdueDate = this.mainTicketData;

    // for (const item of overdueDate) {
    //   const dueDateDay= new Date(item.dueDate)
    //   const dueDateValue =dueDateDay.getDay()
    // }
    // const overdueDates = this.dueDateDay.filter((item:any) => item.getDay() <= this.sliderValue);
    // console.log(overdueDates)
    // this.ticketData=overdueDates;
  }
}



//   this.tickteDate= this.mainTicketData.map((item:any)=>item.dueDate)
//   for(const iterator of this.tickteDate){
//   const overdueDate = this.mainTicketData.filter((item:any) => new Date(iterator). getDay() < this.sliderValue);
//   console.log(overdueDate.dueDate)
//   this.ticketData=overdueDate;
// }