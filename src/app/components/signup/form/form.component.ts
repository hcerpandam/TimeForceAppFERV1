import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../model/usuario";
import {UsuarioService} from "../../../services/usuario.service";
import{Router} from "@angular/router";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private nuevoUsuario:Usuario=new Usuario();

  //Solo pruebas
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.nuevoUsuario));
  }

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  crearUsuario():void {
    this.usuarioService.createUsuario(this.nuevoUsuario).subscribe(usuarioCreado => {this.nuevoUsuario = usuarioCreado});
    //this.router.navigate(['/login']);
  }




}
