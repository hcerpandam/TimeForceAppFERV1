import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {SignupComponent} from "./components/signup/signup.component";
import {MyprofileComponent} from "./components/user/myprofile/myprofile.component";
import {ServiciosfinderComponent} from "./components/user/serviciosfinder/serviciosfinder.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/home/login/login.component";
import {RecoverpassComponent} from "./components/home/recoverpass/recoverpass.component";
import {CreateservicioComponent} from "./components/user/createservicio/createservicio.component";
import {OfferedservicesComponent} from "./components/user/offeredservices/offeredservices.component";
import {ConsumedservicesComponent} from "./components/user/consumedservices/consumedservices.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recuperacion', component: RecoverpassComponent},
  {path: 'perfil/:id', component: MyprofileComponent},
  {path: 'crearservicio', component: CreateservicioComponent},
  {path: 'serviciosofertados', component: OfferedservicesComponent},
  {path: 'serviciosconsumidos', component: ConsumedservicesComponent},
  {path: 'buscadorservicios', component: ServiciosfinderComponent}

];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
