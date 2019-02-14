import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../model/usuario";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      //swal('Login', `Hola ${this.authService.usuario.username} ya estás autenticado!`, 'info');
      this.router.navigate(['/perfil']);//si se ha logeado redirigimos a /clientes
      console.log(this.authService.isAuthenticated());
    }
  }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null) {
      //swal(' Error login', ' El nif o la clave de acceso están vacíos', 'error')
      return;
    }
    this.authService.login(this.usuario).subscribe(response => {
        console.log(response);
        this.authService.guardarUsuario(response.access_token);
        this.authService.guardarToken(response.access_token);
        let usuario = this.authService.usuario;
        this.router.navigate(['/perfil']);
        console.log(this.authService.isAuthenticated());
       // swal('Login', `Hola ${usuario.username}, has iniciado sesion con éxito!`, 'success');
      }, err => {
        if (err.status == 400) {
          console.log(err.status);
          //swal(' Error login', ' El nif o la clave de acceso están vacíos', 'error');
        }
      }
    );
  }

}
