import { Component, OnInit } from '@angular/core';
import {Servicio} from "../../../model/servicio";
import {ServicioService} from "../../../services/servicio.service";
import {Usuario} from "../../../model/usuario";

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  servicios: Array<Servicio>;
  servicioSeleccionado: Servicio;
  nuevoServicio: Servicio;
  ofertante: Usuario;
  consumidor: Usuario;

  /**
   * Declara e inicializa atributo isCollapsed a true
   */
  public isCollapsed1 = false;
  public isCollapsed2 = false;

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.servicioService.findByIdOfertante(this.ofertante.idUsuario).subscribe(servicios => this.servicios = servicios);
    this.servicioService.findByIdConsumidor(this.consumidor.idUsuario).subscribe(servicios => this.servicios = servicios);
  }

  onSelect(id: number) {
    this.servicioService.findByIdServicio(id).subscribe(servicio => this.servicioSeleccionado = servicio);
  }

}
