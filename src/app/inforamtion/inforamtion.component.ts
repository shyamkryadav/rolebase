import { Component } from '@angular/core';

@Component({
  selector: 'app-inforamtion',
  templateUrl: './inforamtion.component.html',
  styleUrls: ['./inforamtion.component.css']
})
export class InforamtionComponent {
  orderDate: string | undefined;
  deliveryDate: string | undefined;
  deliveryDateInput: any;

  onDeliveryDateChange() {
    if (this.orderDate && this.deliveryDate && this.orderDate > this.deliveryDate) {
      this.deliveryDateInput.control.setErrors({ invalidDateRange: true });
    } else {
      this.deliveryDateInput.control.setErrors(null);
    }
  }

}
