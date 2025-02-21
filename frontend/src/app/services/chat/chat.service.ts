import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatRequest } from '../../model/chat-request.model';
import { environment } from '../../../environments/environment';

interface ChatResponse {
  inputTextTokenCount: number;
  results: { tokenCount: number; outputText: string; completionReason: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiGatewayUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  invokeLambda(request: ChatRequest): Observable<ChatResponse> {
  console.log("Sending request to Lambda:", JSON.stringify(request));

  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<ChatResponse>(this.apiGatewayUrl, request, { headers });
  }
}
