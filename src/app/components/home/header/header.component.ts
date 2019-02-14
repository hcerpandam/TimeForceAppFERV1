import { Component, OnInit } from '@angular/core';
import {Constidiomas} from "../../../constants/constidiomas";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * Blocklogo: Inicializacion de atributos del componente hijo
   */
  nombre='Timeforce App';
  fuente = 'assets\\img\\logo.ico';
  estilo='headerstyle';


  /**
   * Dropdown idiomas:
   * Establece valor por defecto
   * Invoca la constante ConstIdiomas para obtener de sus labels la lista de idiomas
   */
  selectedLanguage: String='Idiomas';
  languages = Constidiomas;

  /**
   * Declara e inicializa atributo isCollapsed a true
   */
  public isCollapsed = true;

  constructor() {
  }

  /**
   * Cambia en el dropdown el lenguaje por defecto por el seleccionado
   * @param nuevoLenguaje
   */
  cambiaLenguaje(nuevoLenguaje) {
    this.selectedLanguage = nuevoLenguaje;
  }

  ngOnInit(): void {
  }

}
