import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbaruser',
  templateUrl: './topbaruser.component.html',
  styleUrls: ['./topbaruser.component.scss']
})
export class TopbaruserComponent implements OnInit {

  /**
   * Blocklogo: Inicializacion de atributos del componente hijo
   */
  nombre='Timeforce App';
  fuente = 'assets\\img\\logo.ico';
  estilo='headerstyle';

  /**
   * Declaracion e inicialización de atributos por data-binding
   */
  textButtonMiCuenta='Mi cuenta';
  textButtonMisServicios='Mis servicios';
  textButtonBuscadorServicios='Buscador de servicios';

  /**
   * Declara e inicializa atributo isCollapsed a true
   */
  public isCollapsed = true;

  ngOnInit() {
  }

}
