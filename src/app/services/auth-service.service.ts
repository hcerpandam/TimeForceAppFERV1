import {Injectable} from '@angular/core';
import {Usuario} from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private usuario: Usuario;

  constructor() {
    if (sessionStorage.getItem('usuario')) {
      this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
    }
  }

  setUsuario(usuario: Usuario): void {
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario(): Usuario {
    if(this.usuario==null){
      if (sessionStorage.getItem('usuario')) {
        this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
      }
    }
    return this.usuario;
  }

  logout(){
    this.usuario=null;
    sessionStorage.removeItem('usuario');
  }
}
