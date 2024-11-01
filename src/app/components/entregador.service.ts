import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntregadorService {
  private apiUrl = 'http://localhost:3000/entregadores';

  constructor(private http: HttpClient) {}

  getEntregadoresDisponiveis(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        map(entregadores => entregadores.filter(entregador => entregador.status === 'disponível'))
      );
  }
}
