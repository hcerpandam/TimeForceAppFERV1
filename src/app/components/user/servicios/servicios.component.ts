import { Component, OnInit } from '@angular/core';
import {Servicio} from "../../../model/servicio";
import {ServicioService} from "../../../services/servicio.service";

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  servicios: Array<Servicio>;
  servicioSeleccionado: Servicio;

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.servicioService.findAll().subscribe(servicios => this.servicios = servicios);
  }

  onSelect(id: number) {
    this.servicioService.findByIdServicio(id).subscribe(servicio => this.servicioSeleccionado = servicio);
  }

}
