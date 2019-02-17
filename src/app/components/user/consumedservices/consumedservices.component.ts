import { Component, OnInit } from '@angular/core';
import {Servicio} from "../../../model/servicio";
import {Usuario} from "../../../model/usuario";
import {ServicioService} from "../../../services/servicio.service";
import swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-consumedservices',
  templateUrl: './consumedservices.component.html',
  styleUrls: ['./consumedservices.component.scss']
})
export class ConsumedservicesComponent implements OnInit {

  servicioCancelado: Servicio;
  servicios: Array<Servicio>;
  consumidor: Usuario;

  constructor(private servicioService: ServicioService, private router: Router) { }

  ngOnInit() {
    this.servicioService.findByIdConsumidor(this.consumidor.idUsuario).subscribe(servicios => this.servicios = servicios);
  }

  cancelarServicio():void{
    this.servicioService.cancelServicio(this.servicioCancelado)
      .subscribe((servicioCancelado)=>{this.router.navigate(['/serviciosConsumidos]',servicioCancelado.idServicio]);
          swal.fire(
            'Servicio Cancelado!',
            `Servicio ${servicioCancelado.idServicio} eliminado con éxito.`,
            'success'
          )
        }
      )

  }



}
