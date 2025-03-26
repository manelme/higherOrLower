import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.jikan.moe/v4';
  constructor(private http: HttpClient) {}

  getRandomManga(): Observable<any> {
    const randomPage = Math.floor(Math.random() * 100) + 1;
    return this.http.get(`${this.apiUrl}/manga?page=${randomPage}`);
  }

}
