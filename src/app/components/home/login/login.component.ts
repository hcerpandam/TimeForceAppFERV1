import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../model/usuario";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {

  }

  login(): void {

  }

}
