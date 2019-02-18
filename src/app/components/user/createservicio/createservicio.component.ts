import { Component, OnInit } from '@angular/core';
import {Servicio} from "../../../model/servicio";
import {ServicioService} from "../../../services/servicio.service";
import {AuthServiceService} from "../../../services/auth-service.service";
import swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-createservicio',
  templateUrl: './createservicio.component.html',
  styleUrls: ['./createservicio.component.scss']
})
export class CreateservicioComponent implements OnInit {

  nuevoServicio: Servicio=new Servicio();

  constructor(private servicioService: ServicioService, private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  crearServicio():void {
    this.nuevoServicio.ofertante=this.authService.getUsuario();
    this.servicioService.createServicio(this.nuevoServicio).subscribe(
      servicioCreado => {
        this.nuevoServicio = servicioCreado;
        swal.fire('Exito', `Servicio ${this.nuevoServicio.categoria} se ha creado!`, 'success');
        this.router.navigate(['/perfil/'+this.authService.getUsuario().idUsuario]);
      },
      error1 => {
        swal.fire('Fallo', `Servicio ${this.nuevoServicio.categoria} no se ha creado!`, 'error')
      });
  }

}
