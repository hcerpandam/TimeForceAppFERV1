import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../../model/usuario';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthServiceService} from '../../../services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuariolog: Usuario;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private authService: AuthServiceService) {
    this.usuariolog = new Usuario();
  }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  loginUsuario() {
    const url = 'http://localhost:8080/login';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(this.usuariolog.username + ':' + this.usuariolog.password)}`
      })
    };

    this.http.get<Usuario>(url, httpOptions).subscribe(usuario => {
      if (usuario != null) {
        sessionStorage.setItem('token', btoa(this.usuariolog.username + ':' + this.usuariolog.password));
        this.authService.setUsuario(usuario);
        if(usuario.rol.nombreRol==='ROLE_USUARIO'){
          this.router.navigate(['/perfil/'+usuario.idUsuario]);
        }else{
          this.router.navigate(['/perfil/'+usuario.idUsuario]);
        }
      } else {
        alert('Authentication failed.');
      }
    });
  }

}
