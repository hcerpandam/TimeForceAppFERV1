import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../model/usuario";
import {UsuarioService} from "../../../services/usuario.service";
import swal from "sweetalert2";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  nuevoUsuario:Usuario=new Usuario();

  //Solo pruebas
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.nuevoUsuario));
  }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  crearUsuario():void {
    this.usuarioService.createUsuario(this.nuevoUsuario).subscribe(usuarioCreado => {this.nuevoUsuario = usuarioCreado});
    swal.fire('Usuario Creado', `Usuario ${this.nuevoUsuario.nombre} creado con éxito!`, 'success')
    //this.router.navigate(['/login']);
  }






}
