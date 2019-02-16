import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from "../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  private usuariosUrl='http://localhost:8080/api/usuarios';
  private usuariosUrlRegistro = 'http://localhost:8080/api/registro';
  private usuariosUrlModificarUsuario='http://localhost:8080/api/perfil';

  constructor(private http: HttpClient) {
  }

  findById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.usuariosUrl + '/' + id);
  }

  createUsuario(nuevoUsuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.usuariosUrlRegistro, nuevoUsuario, {headers: this.httpHeaders});
  }

  updateUsuario(usuarioModificado: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.usuariosUrlModificarUsuario}/${usuarioModificado.idUsuario}`, usuarioModificado, {headers: this.httpHeaders})
  }

  deleteUsuario(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.usuariosUrlModificarUsuario}/${id}`, {headers: this.httpHeaders})
  }

}
