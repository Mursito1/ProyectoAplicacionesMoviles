import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {
    this.init();
  }

  async init() {
    //await this.storage.create();
  }

  getUsuarios(): Observable<any[]> {
    return new Observable((observer) => {
      this.http.get<any[]>(`${this.apiUrl}/usuarios/`).subscribe(
        (apiData) => {
          observer.next(apiData);
          observer.complete();
        },
        (error) => {
          console.error('Error en la solicitud HTTP:', error);
          observer.error(error);
        }
      );
    });
  }
  
}