import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../model/usuario";
import {UsuarioService} from "../../../services/usuario.service";
import swal from "sweetalert2";
import {Router} from "@angular/router";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  nuevoUsuario:Usuario=new Usuario();


  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  crearUsuario():void {
    this.usuarioService.createUsuario(this.nuevoUsuario).subscribe(usuarioCreado => {this.nuevoUsuario = usuarioCreado});
    swal.fire('Usuario Creado', `Usuario ${this.nuevoUsuario.nombre} creado con éxito!`, 'success');
    this.router.navigate(['/login']);
  }






}
