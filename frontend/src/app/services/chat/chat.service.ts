import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatRequest } from '../../model/chat-request.model'; // ✅ Ensure this path is correct

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiGatewayUrl = "https://hd59wi41j8.execute-api.us-east-1.amazonaws.com/prod/"; // ✅ Replace with actual API Gateway URL

  constructor(private http: HttpClient) {}

  /** ✅ Corrected method name to match your function call */
  invokeLambda(request: ChatRequest): Observable<any> {
    console.log("📤 Sending request to Lambda:", JSON.stringify(request));

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiGatewayUrl, request, { headers });
  }
}
