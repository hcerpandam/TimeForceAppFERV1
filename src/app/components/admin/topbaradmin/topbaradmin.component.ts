import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbaradmin',
  templateUrl: './topbaradmin.component.html',
  styleUrls: ['./topbaradmin.component.scss']
})
export class TopbaradminComponent implements OnInit {

  /**
   * Blocklogo: Inicializacion de atributos del componente hijo
   */
  nombre='Timeforce App';
  fuente = 'assets\\img\\logo.ico';
  estilo='headerstyle';

  constructor() { }

  /**
   * Declara e inicializa atributo isCollapsed a true
   */
  public isCollapsed = true;

  ngOnInit() {
  }

  logout() {
    sessionStorage.setItem('token', '');
  }

}
