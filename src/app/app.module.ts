import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HeaderComponent } from "./Shared/Header/header.component";
import { FooterComponent } from "./Shared/Footer/footer.component";
import { RouterModule } from "@angular/router";
import { appRoutingModule } from "./app.routing";
import { DashboardComponent } from "./Dashboard/dashboard.component";
import { NoPageFoundComponent } from "./NoPageFound/noPageFound.component";
import { StudentComponent } from './student/student.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    NoPageFoundComponent,
    StudentComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
