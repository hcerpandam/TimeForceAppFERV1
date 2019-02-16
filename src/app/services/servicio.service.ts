import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Servicio} from '../model/servicio';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private serviciosUrl = 'http://localhost:8080/api/servicios';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.serviciosUrl);
  }

  findByIdServicio(id: number): Observable<Servicio> {
    return this.http.get<Servicio>(this.serviciosUrl + '/' + id);
  }

  findByIdOfertante(id: number): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(this.serviciosUrl + '/' + id);
  }

  findByIdConsumidor(id: number): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(this.serviciosUrl + '/' + id);
  }

  createServicio(servicioNuevo: Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(this.serviciosUrl, servicioNuevo, httpOptions);
  }
}
