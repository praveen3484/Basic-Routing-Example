import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AboutComponent } from "./about/about.component";
import { PlaceComponent } from "./place/place.component";
import { PageNotFoundComponent } from "./notfound/notfound.component";

const routes: Routes = [
    {
        path: '', redirectTo: '/app', pathMatch: 'full'
    },
    { path: 'app', component: DashboardComponent },

    { path: 'about', component: AboutComponent },
    { path: 'place', component: PlaceComponent },
    {path: '**' ,component: PageNotFoundComponent}


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}