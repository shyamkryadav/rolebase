import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProxcyDataService {
url="http://localhost:3000/tickets";

  constructor(private http:HttpClient) { 
 
  }
     
  showAssingData():Observable<any> {
  return this.http.get(this.url)
  }

  getAssignData(data:any){
   return this.http.post(this.url,data)
  }


  updateAssignData(item: any){
    const url = `${this.url}/${item.id}`;
    return this.http.put(url, item);
  }

  updateStudentData(id:number,data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }

}
