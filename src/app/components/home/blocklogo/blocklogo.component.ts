import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blocklogo',
  templateUrl: './blocklogo.component.html',
  styleUrls: ['./blocklogo.component.scss']
})
export class BlocklogoComponent implements OnInit {

  /**
   * Declaramos el atributo para inicializarlo en componente padre
   */
  @Input() nombre;
  @Input() fuente;
  @Input() estilo;


  constructor() { }

  ngOnInit() {
  }

}
