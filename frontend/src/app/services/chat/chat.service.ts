import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatRequest } from '../../model/chat-request.model'; // Ensure correct import

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:8080/chat/send'; // Ensure this is correct

  constructor(private http: HttpClient) {}

  sendMessage(request: ChatRequest): Observable<string> {
    console.log("🔹 Sending to backend:", JSON.stringify(request)); // ✅ Log outgoing request
    return this.http.post<string>(this.apiUrl, request, { headers: { 'Content-Type': 'application/json' } });
  }
}
