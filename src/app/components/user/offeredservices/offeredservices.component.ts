import { Component, OnInit } from '@angular/core';
import {Servicio} from "../../../model/servicio";
import {Usuario} from "../../../model/usuario";
import {ServicioService} from "../../../services/servicio.service";
import swal from "sweetalert2";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../../services/auth-service.service";

@Component({
  selector: 'app-offeredservices',
  templateUrl: './offeredservices.component.html',
  styleUrls: ['./offeredservices.component.scss']
})
export class OfferedservicesComponent implements OnInit {

  servicios: Array<Servicio>=new Array<Servicio>();
  ofertante: Usuario;

  constructor(private authService: AuthServiceService, private servicioService: ServicioService, private router: Router) { }

  ngOnInit() {
    this.ofertante=this.authService.getUsuario();
    this.servicioService.findByIdOfertante(this.ofertante.idUsuario).subscribe(servicios => this.servicios = servicios);
  }

  cancelarServicio(servicioCancelado:Servicio):void{
    this.servicioService.cancelServicio(servicioCancelado)
      .subscribe((servicioCancelado)=>{this.router.navigate(['/serviciosConsumidos]']);
          swal.fire(
            'Servicio Cancelado!',
            `Servicio ${servicioCancelado.idServicio} cancelado con éxito.`,
            'success'
          )
        }
      )
  }

}
