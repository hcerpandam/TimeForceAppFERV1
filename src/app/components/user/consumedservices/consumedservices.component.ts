import { Component, OnInit } from '@angular/core';
import {Servicio} from "../../../model/servicio";
import {Usuario} from "../../../model/usuario";
import {ServicioService} from "../../../services/servicio.service";
import swal from "sweetalert2";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../../services/auth-service.service";

@Component({
  selector: 'app-consumedservices',
  templateUrl: './consumedservices.component.html',
  styleUrls: ['./consumedservices.component.scss']
})

export class ConsumedservicesComponent implements OnInit {

  servicios: Array<Servicio>=new Array<Servicio>();
  consumidor: Usuario;

  constructor(private authService: AuthServiceService, private servicioService: ServicioService, private router: Router) { }

  ngOnInit() {
    this.consumidor=this.authService.getUsuario();
    this.servicioService.findByIdConsumidor(this.consumidor.idUsuario).subscribe(servicios => this.servicios = servicios);
  }

}
