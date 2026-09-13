import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarjetaCredito } from '../components/tarjeta-credito/tarjeta-credito';

@Injectable({
  providedIn: 'root',
})
export class TarjetaService {
  private myAppUrl = "https://localhost:44323/";
  private myApiUrl = "api/tarjeta/";

  constructor(private http: HttpClient){}

  getListTarjetas(): Observable<TarjetaCredito[]> {
    return this.http.get<TarjetaCredito[]>(this.myAppUrl + this.myApiUrl);
  }

  deleteTarjeta(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  saveTarjeta(tarjeta: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, tarjeta);
  }

  updateTarjeta(id:number, tarjeta: any): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id, tarjeta);
  }

}
