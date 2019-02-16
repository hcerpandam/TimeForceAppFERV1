//Angular generals
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Ng-Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Directives
import { MustMatchDirective } from './directives/must-match.directive';

//Services
import { UsuarioService } from "./services/usuario.service";
import { ServicioService } from "./services/servicio.service";

//Common components
import { FooterComponent } from './components/footer/footer.component';

//Cover components
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { BlocklogoComponent } from './components/home/blocklogo/blocklogo.component';
import { CoverComponent } from './components/home/cover/cover.component';
import { LoginComponent } from './components/home/login/login.component';
import { RecoverpassComponent } from './components/home/recoverpass/recoverpass.component';
import { SignupComponent } from './components/signup/signup.component';

//Signup components
import { TopbarformComponent } from './components/signup/topbarform/topbarform.component';
import { FormComponent } from './components/signup/form/form.component';
import { ExplanationformComponent } from './components/signup/explanationform/explanationform.component';
import { DataprotectionlawComponent } from './components/signup/dataprotectionlaw/dataprotectionlaw.component';

//User components
import { TopbaruserComponent } from './components/user/topbaruser/topbaruser.component';
import { ServiciosComponent } from './components/user/servicios/servicios.component';
import { ServiciosmasterComponent } from './components/user/servicios/serviciosmaster/serviciosmaster.component';
import { ServiciosdetailComponent } from './components/user/servicios/serviciosdetail/serviciosdetail.component';
import { MyprofileComponent } from './components/user/myprofile/myprofile.component';
import { ServiciosfinderComponent } from './components/user/serviciosfinder/serviciosfinder.component';

@NgModule({
  declarations: [
    AppComponent,
    MustMatchDirective,
    HomeComponent,
    HeaderComponent,
    BlocklogoComponent,
    CoverComponent,
    FooterComponent,
    SignupComponent,
    TopbarformComponent,
    FormComponent,
    ExplanationformComponent,
    DataprotectionlawComponent,
    TopbaruserComponent,
    ServiciosComponent,
    ServiciosmasterComponent,
    ServiciosdetailComponent,
    MyprofileComponent,
    ServiciosfinderComponent,
    LoginComponent,
    RecoverpassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [UsuarioService, ServicioService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
