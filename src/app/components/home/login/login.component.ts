import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../model/usuario";
import {UsuarioService} from "../../../services/usuario.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuariolog: Usuario;

  constructor(private usuarioService: UsuarioService) {
      this.usuariolog=new Usuario();
  }

  ngOnInit() {}

  loginUsuario(){}

}
