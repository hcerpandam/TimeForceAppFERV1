import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../model/usuario";
import {UsuarioService} from "../../../services/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";
import swal from 'sweetalert2'

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  /**
   * Declaración objeto usuario
   */
  private usuarioModificado: Usuario = new Usuario();

  //Solo pruebas
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.usuarioModificado));
  }


  constructor(private usuarioService: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {this.cargarUsuario()}

  cargarUsuario(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){this.usuarioService.findById(id).subscribe( (usuarioModificado) => this.usuarioModificado = usuarioModificado)}})
  }

  modificarUsuario():void{
    this.usuarioService.updateUsuario(this.usuarioModificado)
      .subscribe( usuarioModificado => {this.router.navigate(['/usuarios/perfil/:id']);
        swal.fire('Usuario Modificado', `Usuario ${usuarioModificado.nombre} modificado con éxito!`, 'success')})
  }

  eliminarUsuario(usuarioModificado: Usuario):void{
    this.usuarioService.deleteUsuario(usuarioModificado.idUsuario)
      .subscribe((usuarioModificado)=>{this.router.navigate(['/home]']);
        swal.fire(
          'Usuario Eliminado!',
          `Usuario ${usuarioModificado.nombre} eliminado con éxito.`,
          'success'
        )
      }
    )
  }
}
