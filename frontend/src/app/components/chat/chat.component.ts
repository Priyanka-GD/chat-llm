import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat/chat.service';
import { ChatRequest } from '../../model/chat-request.model';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ChatService],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  userInput: string = '';
  constructor(private chatService: ChatService) {}
  chatHistory: { sender: string; text: string }[] = [];
   sendMessage() {
       if (!this.userInput.trim()) return;
       const chatRequest = new ChatRequest(this.userInput);
       this.chatHistory.push({ sender: 'You', text: chatRequest.text });

       console.log("📤 Sending request to Lambda:", JSON.stringify(chatRequest));

       // Call AWS Lambda via API Gateway
       this.chatService.invokeLambda(chatRequest).subscribe(
         (response: any) => {
           console.log("✅ Received Lambda Response:", response);
           this.chatHistory.push({ sender: 'AI', text: response.message });
         },
         (error: any) => {
           console.error('❌ Error calling Lambda:', error);
         }
       );

       this.userInput = '';
   }

}
