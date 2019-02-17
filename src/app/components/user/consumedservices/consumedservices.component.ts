import { Component, OnInit } from '@angular/core';
import {Servicio} from "../../../model/servicio";
import {Usuario} from "../../../model/usuario";
import {ServicioService} from "../../../services/servicio.service";

@Component({
  selector: 'app-consumedservices',
  templateUrl: './consumedservices.component.html',
  styleUrls: ['./consumedservices.component.scss']
})
export class ConsumedservicesComponent implements OnInit {

  servicios: Array<Servicio>;
  consumidor: Usuario;

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.servicioService.findByIdConsumidor(this.consumidor.idUsuario).subscribe(servicios => this.servicios = servicios);
  }

}
