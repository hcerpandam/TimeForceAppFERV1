import { Component, OnInit } from '@angular/core';
import {Servicio} from "../../../model/servicio";
import {Usuario} from "../../../model/usuario";
import {ServicioService} from "../../../services/servicio.service";

@Component({
  selector: 'app-offeredservices',
  templateUrl: './offeredservices.component.html',
  styleUrls: ['./offeredservices.component.scss']
})
export class OfferedservicesComponent implements OnInit {

  servicios: Array<Servicio>;
  ofertante: Usuario;

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.servicioService.findByIdOfertante(this.ofertante.idUsuario).subscribe(servicios => this.servicios = servicios);
  }

}
