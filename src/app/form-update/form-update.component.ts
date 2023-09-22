import { Component } from '@angular/core';
import { ProxcyDataService } from '../services/proxcy-data.service';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent {


  constructor(private _ProxcyDataService:ProxcyDataService){
   
  }

  getFormData(data:any){
    this._ProxcyDataService.getAssignData(data).subscribe((result)=>{
      console.log(result)
    })

    console.log(data)
}



}
