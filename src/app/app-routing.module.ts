import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {SignupComponent} from "./components/signup/signup.component";
import {ServiciosComponent} from "./components/user/servicios/servicios.component";
import {ServiciosdetailComponent} from "./components/user/servicios/serviciosdetail/serviciosdetail.component";
import {MyprofileComponent} from "./components/user/myprofile/myprofile.component";
import {ServiciosfinderComponent} from "./components/user/serviciosfinder/serviciosfinder.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/home/login/login.component";
import {RecoverpassComponent} from "./components/home/recoverpass/recoverpass.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recuperacion', component: RecoverpassComponent},
  {path: 'perfil/:id', component: MyprofileComponent},
  {path: 'buscadorservicios', component: ServiciosfinderComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'servicios/:id', component: ServiciosdetailComponent}
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
