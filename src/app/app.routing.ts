import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./Dashboard/dashboard.component";
import { NoPageFoundComponent } from "./NoPageFound/noPageFound.component";


const routes : Routes =[
        {path:'', redirectTo :'', pathMatch:'full'},
        {path : 'dash', component:DashboardComponent},
        {path:'**', component: NoPageFoundComponent}
    ]

@NgModule({
    imports :[RouterModule.forRoot(routes,{ enableTracing: true })],
    exports : [RouterModule]

})



export class appRoutingModule{

}