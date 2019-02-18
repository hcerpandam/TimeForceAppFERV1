import { Component, OnInit } from '@angular/core';
import {Servicio} from "../../../model/servicio";
import {ServicioService} from "../../../services/servicio.service";
import {Usuario} from "../../../model/usuario";
import {AuthServiceService} from "../../../services/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-serviciosfinder',
  templateUrl: './serviciosfinder.component.html',
  styleUrls: ['./serviciosfinder.component.scss']
})
export class ServiciosfinderComponent implements OnInit {

  servicios: Array<Servicio>=new Array<Servicio>();
  ofertante: Usuario;
  consumidor: Usuario;

  constructor(private authService: AuthServiceService, private servicioService: ServicioService, private router: Router) { }

  ngOnInit() {

    this.consumidor=this.authService.getUsuario();
    this.servicioService.findByIdOfertante(this.ofertante.idUsuario).subscribe(servicios => this.servicios = servicios);
  }

}
