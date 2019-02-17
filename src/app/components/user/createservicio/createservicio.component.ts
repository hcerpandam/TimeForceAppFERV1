import { Component, OnInit } from '@angular/core';
import {Servicio} from "../../../model/servicio";
import {ServicioService} from "../../../services/servicio.service";

@Component({
  selector: 'app-createservicio',
  templateUrl: './createservicio.component.html',
  styleUrls: ['./createservicio.component.scss']
})
export class CreateservicioComponent implements OnInit {

  nuevoServicio: Servicio=new Servicio();

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
  }

  crearServicio():void {
    this.servicioService.createServicio(this.nuevoServicio).subscribe(servicioCreado => {this.nuevoServicio = servicioCreado});
    console.log(JSON.stringify(this.nuevoServicio));
    //swal.fire('Servicio Creado', `Usuario ${this.nuevoServicio.categoria} creado con éxito!`, 'success')
    //this.router.navigate(['/servicios']);
  }

}
