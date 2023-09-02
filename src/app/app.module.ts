import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { AssignedComponent } from './assigned/assigned.component';
import { AllTicketComponent } from './all-ticket/all-ticket.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AssignedFormComponent } from './assigned-form/assigned-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllTicketsComponent,
    AssignedComponent,
    AllTicketComponent,
    AssignedFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
