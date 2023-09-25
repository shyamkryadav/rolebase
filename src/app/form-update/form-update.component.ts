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
  updateData:any = {};
  constructor(private _ProxcyDataService:ProxcyDataService,private router:ActivatedRoute ,private route:Router){}
  ngOnInit():void{
    this._ProxcyDataService.getticketById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      this.updateData=result;
    })
  }
    updateFormData(){
          this._ProxcyDataService.updateTicketData(this.router.snapshot.params['id'],this.updateData).subscribe((result)=>{
        })
        this.route.navigateByUrl("assigned")
    }
}


