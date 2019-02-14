import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from "../model/usuario";
import { Token } from '@angular/compiler';

/* Esta clase service, tiene toda la logica de la seguridad */

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * Los objetos privados y/o con getter se marcan con _
   */
  private _usuario: Usuario;
  private _token: string;

  /**
   * Constructor
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Obtener usuario
   */
  public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    } else{
      return new Usuario();
    }
  }

  /**
   * Obtener token
   */
  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    } else{
      return null;
    }
  }

  /**
   * Método login()
   * return: Respuesta que contiene los datos de acceso. Necesitamos el httpclient porque vamos a retornar una respuesta.
   * En el post requerimos una url, en la cual enviamos los datos para autenticarnos.
   * Endpoint apunta a la ruta de spring para los token.
   * Credenciales contiene el cliente con la autentificacion encriptada en base 64.
   * HttpHeaders debe ser del tipo  application/x-www-form-urlencoded
   * Authorization define el tipo de autentificacion
   * Params almacena los parámetros que le indiquemos
   * @param usuario
   */
  login(usuario: Usuario): Observable<any> {
    const urlEndpoint = 'http://localhost:8080/oauth/token';
    const credenciales = btoa('angularapp' + ':' + '12345');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);

    return this.http.post<any>(urlEndpoint, params.toString(), { headers: httpHeaders });

  }

  /**
   * Utilizamos _ porque token es privado y tiene getter
   * Instanciamos usuario y le pasamos los datos a traves del payload
   * SessionStorage permite guardar la sesión con formato string
   * @param accessToken
   */
  guardarUsuario(accessToken: string): void {
    let payload = AuthService.obtenerDatosToken(accessToken);
    this._usuario = new Usuario();
    this._usuario.username=payload.username;
    this._usuario.password=payload.password;
    this._usuario.nombre=payload.nombre;
    this._usuario.apellidos=payload.apellidos;
    this._usuario.fechaNacimiento=payload.fechaNacimiento;
    this._usuario.tipoVia=payload.tipoVia;
    this._usuario.nombreVia=payload.nombreVia;
    this._usuario.numeroPortal=payload.numeroPortal;
    this._usuario.escalera=payload.escalera;
    this._usuario.puerta=payload.puerta;
    this._usuario.provincia=payload.provincia;
    this._usuario.codPostal=payload.codPostal;
    this._usuario.telefono=payload.telefono;
    this._usuario.mail=payload.mail;
    this._usuario.balance=payload.balance;
    this._usuario.suspendido=payload.suspendido;
    this._usuario.diasSuspension=payload.diasSuspension;
    this._usuario.baneado=payload.baneado;
    this._usuario.roles = payload.authorities;
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario))
  };

  /**
   * Muy parecido el metodo anterior, solo que el token equivale al accessToken y lo guardamos en el sessionStorage
   * @param accessToken
   */
  guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken)
  };

  /**
   * Permite obtener los datos como un JSON
   * @param accessToken
   */
  static obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }else{
      return null;
    }
  }

  /**
   * Comprobar que el usuario ya se ha logueado
   * Obtenemos el token desde el método get
   */
  isAuthenticated():boolean{
    let payload = AuthService.obtenerDatosToken(this.token);
    return payload != null && payload.username && payload.username.length > 0;
  }

  /**
   * Borra todas las variables de sesión
   */
  logOut():void{
    this._token=null;
    this._usuario=null;
    sessionStorage.clear();
  }

}
