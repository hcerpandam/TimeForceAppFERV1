import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthServiceService} from "../../../services/auth-service.service";
import swal from "sweetalert2";
import {Router} from "@angular/router";
import {ServicioService} from "../../../services/servicio.service";

@Component({
  selector: 'app-topbaruser',
  templateUrl: './topbaruser.component.html',
  styleUrls: ['./topbaruser.component.scss']
})
export class TopbaruserComponent implements OnInit {

  /**
   * Blocklogo: Inicializacion de atributos del componente hijo
   */
  nombre='Timeforce App';
  fuente = 'assets\\img\\logo.ico';
  estilo='headerstyle';

  /**
   * Declaracion e inicialización de atributos por data-binding
   */
  textButtonMiCuenta='Mi cuenta';
  textButtonCrearServicio='Crear servicio';
  textButtonServiciosOfertados='Mis servicios ofertados';
  textButtonServiciosConsumidos='Mis servicios consumidos';

  /**
   * Declara e inicializa atributo isCollapsed a true
   */
  public isCollapsed = true;

  //Llama al authservice que es el que almacena toda la información del usuario
  getUsuario() {
    return this.authService.getUsuario();
  }

  public palabra:string;

  constructor(private authService: AuthServiceService, private router: Router, private serviciosService: ServicioService) {}

  ngOnInit() {
    this.getUsuario();
    this.getId();
  }

  logout() {
    sessionStorage.setItem('token', '');
    this.authService.logout();
    swal.fire('Salir', `'Hasta pronto!`, 'success');
    this.router.navigate(['/home']);
  }

  buscar(palabra:string){
    console.log("Pulsado, palabra: "+palabra);
    this.serviciosService.findByFiltros(palabra);
  }

  navegar(){
    this.router.navigate(['/perfil/'+this.authService.getUsuario().idUsuario]);
  }

  getId(){
    this.authService.getUsuario().idUsuario;
  }

}
