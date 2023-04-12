import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {KontaktAppComponent} from "./pages/kontakt-app/kontakt-app.component";
import {AddKontaktComponent} from "./pages/add-kontakt/add-kontakt.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'kontakt',component:KontaktAppComponent},
  {path:'addKontakt',component:AddKontaktComponent},
  {path:'editkontakt/:IdKontakt',component:AddKontaktComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
