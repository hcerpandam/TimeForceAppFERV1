import { Component, OnInit } from '@angular/core';
import {Constidiomas} from "../../../constants/constidiomas";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

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

  userName:string;

  constructor(private http: HttpClient) {
  }

  /**
   * Cambia en el dropdown el lenguaje por defecto por el seleccionado
   * @param nuevoLenguaje
   */
  cambiaLenguaje(nuevoLenguaje) {
    this.selectedLanguage = nuevoLenguaje;
  }

  ngOnInit(){
    let url = 'http://localhost:8080/usuario';

    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + sessionStorage.getItem('token')
    });

    let options = { headers: headers };
    this.http.post<Observable<Object>>(url, {}, options).
    subscribe(principal => {
        this.userName = principal['name'];
      },
      error => {
        if(error.status == 401)
          alert('Unauthorized');
      }
    );
  }

  logout() {
    sessionStorage.setItem('token', '');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
