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
import { MyprofileComponent } from './components/user/myprofile/myprofile.component';
import { CreateservicioComponent } from "./components/user/createservicio/createservicio.component";
import { OfferedservicesComponent } from "./components/user/offeredservices/offeredservices.component";
import { ConsumedservicesComponent } from "./components/user/consumedservices/consumedservices.component";
import { ServiciosfinderComponent } from './components/user/serviciosfinder/serviciosfinder.component';

//Admin components
import { TopbaradminComponent } from './components/admin/topbaradmin/topbaradmin.component';
import { BuscadorserviciossospechososComponent } from './components/admin/buscadorserviciossospechosos/buscadorserviciossospechosos.component';
import { BanearusuariosComponent } from './components/admin/banearusuarios/banearusuarios.component';

//Login and interceptors
import {AuthServiceService} from "./services/auth-service.service";
import {httpInterceptorProviders} from "./http-interceptors";

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
    MyprofileComponent,
    ServiciosfinderComponent,
    LoginComponent,
    RecoverpassComponent,
    CreateservicioComponent,
    OfferedservicesComponent,
    ConsumedservicesComponent,
    TopbaradminComponent,
    BuscadorserviciossospechososComponent,
    BanearusuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [httpInterceptorProviders, AuthServiceService, UsuarioService, ServicioService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
