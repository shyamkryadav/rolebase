import { Component, ViewChild } from '@angular/core';
import { ProxcyDataService } from '../services/proxcy-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent {
  priority:any;
  title:any;
  updateData: any;
  constructor(private _ProxcyDataService:ProxcyDataService,private router:ActivatedRoute ,private route:Router){
  }
  @ViewChild('updateForm') updateValue!:NgForm ;
  ngOnInit():void{
    // console.log(this.router.snapshot.params['id'])
    this._ProxcyDataService.getticketById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      this.updateData=result;
      this.updateValue.form.setValue({
          "title": this.updateData.title,
          "priority": this.updateData.priority,
          "status":  this.updateData.status,
          "dueDate": this.updateData.dueDate,
          "department": this.updateData.department,
          "requestType": this.updateData.requestType,
          "id":  this.updateData.id,
      })
    })
  }
updateFormData(data:any){
       this._ProxcyDataService.updateTicketData(this.router.snapshot.params['id'],data).subscribe((result)=>{
    })
    this.route.navigateByUrl("assigned")
}
}
