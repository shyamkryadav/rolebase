import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedComponent } from './assigned/assigned.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { AssignedFormComponent } from './assigned-form/assigned-form.component';
import { OvredueTicketComponent } from './ovredue-ticket/ovredue-ticket.component';

const routes: Routes = [
  {path:'',component:AllTicketsComponent},
  {path:'assigned',component:AssignedComponent},
  {path:'allTicket',component:AllTicketsComponent},
  {path:'assigned-form',component:AssignedFormComponent},
  {path:'overdue',component:OvredueTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
