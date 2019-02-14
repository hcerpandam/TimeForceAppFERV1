import {Component, Input, OnInit} from '@angular/core';
import {Servicio} from "../../../../model/servicio";
import {ServicioService} from "../../../../services/servicio.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-serviciosdetail',
  templateUrl: './serviciosdetail.component.html',
  styleUrls: ['./serviciosdetail.component.scss']
})
export class ServiciosdetailComponent implements OnInit {

  @Input() servicio: Servicio;
  servicioNuevo = new Servicio();

  constructor(private servicioService: ServicioService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.servicioService.findByIdServicio(id).subscribe(respuestaDeSpring => this.servicio = respuestaDeSpring);
  }

  crearServicio() {
    this.servicioService.createServicio(this.servicioNuevo).subscribe(servicioRecienCreado => this.servicioNuevo = servicioRecienCreado );
  }

}
