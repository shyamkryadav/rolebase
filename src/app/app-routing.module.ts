import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedComponent } from './assigned/assigned.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { AssignedFormComponent } from './assigned-form/assigned-form.component';

const routes: Routes = [
  {path:'assigned',component:AssignedComponent},
  {path:'allTicket',component:AllTicketsComponent},
  {path:'assigned-form',component:AssignedFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
