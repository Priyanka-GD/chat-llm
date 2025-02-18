import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendMessage(userMessage: string): Observable<{ llmResponse: string }> {
  return this.http.post<{ llmResponse: string }>(apiUrl, { text: userMessage });
  }
}
