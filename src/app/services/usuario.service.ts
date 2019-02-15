import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from "../model/usuario";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuariosUrl='http://localhost:8080/api/usuarios';
  private usuariosUrlRegistro = 'http://localhost:8080/api/registro';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl);
  }

  findById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.usuariosUrl + '/' + id);
  }

  createUsuario(nuevoUsuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.usuariosUrlRegistro, nuevoUsuario, httpOptions);
  }
}
