import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat/chat.service';
import { ChatRequest } from '../../model/chat-request.model';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

interface ChatResponse {
  message?: string; 
  results?: { tokenCount: number; outputText: string; completionReason: string }[];
}


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
  chatHistory: ChatMessage[] = [];
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  constructor(private chatService: ChatService) {}

  sendMessage(): void {
    if (!this.userInput.trim()) return;

    const chatRequest = new ChatRequest(this.userInput);
    this.chatHistory.push({ sender: 'user', text: chatRequest.inputText });

    console.log("Sending request to Lambda:", JSON.stringify(chatRequest));


    this.chatService.invokeLambda(chatRequest).subscribe(
      (response: ChatResponse) => {
        console.log("Received Lambda Response:", response);

        const aiResponse = response.message || "Error: No response";

        this.chatHistory.push({ sender: 'ai', text: aiResponse });
        this.scrollToBottom();

        this.scrollToBottom();
      },
      (error: any) => {
        console.error('Error calling Lambda:', error);
        this.chatHistory.push({ sender: 'ai', text: 'Error fetching AI response' });
      }
    );

    this.userInput = '';
  }

  scrollToBottom(): void {
    setTimeout(() => {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }
    }, 100);
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
