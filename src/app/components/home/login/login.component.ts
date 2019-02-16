import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../model/usuario";
import {UsuarioService} from "../../../services/usuario.service";
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuariolog: Usuario;

  /*constructor(private usuarioService: UsuarioService) {
      this.usuariolog=new Usuario();
  }*/

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.usuariolog=new Usuario();
  }

  ngOnInit() {sessionStorage.setItem('token', '');}

  loginUsuario(){let url = 'http://localhost:8080/login';
    this.http.post<Observable<boolean>>(url, {
      userName: this.usuariolog.username,
      password: this.usuariolog.password
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem('token', btoa(this.usuariolog.username + ':' + this.usuariolog.password));
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }});
  }

}
