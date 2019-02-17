import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Servicio} from '../model/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  private serviciosUrl = 'http://localhost:8080/api/servicios';

  constructor(private http: HttpClient) {
  }

  createServicio(nuevoServicio: Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(this.serviciosUrl, nuevoServicio, {headers: this.httpHeaders});
  }

  cancelServicio(servicioCancelado: Servicio): Observable<Servicio>{
    return this.http.put<Servicio>(`${this.serviciosUrl}/${servicioCancelado.idServicio}`, servicioCancelado, {headers: this.httpHeaders})
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


}
