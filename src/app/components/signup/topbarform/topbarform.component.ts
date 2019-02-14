import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbarform',
  templateUrl: './topbarform.component.html',
  styleUrls: ['./topbarform.component.scss']
})
export class TopbarformComponent implements OnInit {

  /**
   * Blocklogo: Inicializacion de atributos del componente hijo
   */
  nombre='Timeforce App';
  fuente = 'assets\\img\\logo.ico';
  estilo='headerstyle';

  constructor() { }

  ngOnInit() {
  }

}
