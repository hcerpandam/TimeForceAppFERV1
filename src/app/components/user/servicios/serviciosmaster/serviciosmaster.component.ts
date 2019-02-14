import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Servicio} from "../../../../model/servicio";

@Component({
  selector: 'app-serviciosmaster',
  templateUrl: './serviciosmaster.component.html',
  styleUrls: ['./serviciosmaster.component.scss']
})

export class ServiciosmasterComponent implements OnInit {

  @Input() servicios: Array<Servicio> = [];
  @Output() idServicioSeleccionado: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit():void {
  }

  mostrarDetalle(idServicio: number) {
    this.idServicioSeleccionado.emit(idServicio);
  }

}
