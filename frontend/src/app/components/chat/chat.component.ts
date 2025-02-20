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
    // Add user message to chat history
    this.chatHistory.push({ sender: 'You', text: chatRequest.text });
    console.log("Request Object:", JSON.stringify(chatRequest));
    // Send user input to backend AI model
    this.chatService.sendMessage(chatRequest).subscribe(
      (response: any) => {
        console.log("✅ Received Response:", response);
        this.chatHistory.push({ sender: 'AI', text: response });
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );

    this.userInput = '';
  }
}
