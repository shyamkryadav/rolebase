import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProxcyDataService } from '../services/proxcy-data.service';

@Component({
  selector: 'app-assigned-form',
  templateUrl: './assigned-form.component.html',
  styleUrls: ['./assigned-form.component.css']
})
export class AssignedFormComponent {
  constructor(private _ProxcyDataService:ProxcyDataService){
   
  }

  getFormData(data:any){
      this._ProxcyDataService.getAssignData(data).subscribe((result)=>{
        console.log(result)
      })
  }
}
