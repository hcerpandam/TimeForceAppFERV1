import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../model/usuario";
import {UsuarioService} from "../../../services/usuario.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario=new Usuario();

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {

  }

  loginUsuario(): void {
    this.usuarioService.findByNifAndClaveAcceso(this.usuario.nif,this.usuario.claveAcceso).subscribe(usuarioLogueado => {this.usuario = usuarioLogueado});
  }

}
