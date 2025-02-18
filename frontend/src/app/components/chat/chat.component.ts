import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service'; // Correct path


@Component({
selector: 'app-chat',
templateUrl: './chat.component.html',
styleUrls: ['./chat.component.css']
})

export class ChatComponent {
  messages: { text: string; sender: string }[] = [];
  userInput: string = '';

  constructor(private chatService: ChatService) {}

  sendMessage() {
      if (!this.userInput.trim()) return;

      this.messages.push({ text: this.userInput, sender: 'user' });

      this.chatService.sendMessage(this.userInput).subscribe(
        (response: { llmResponse: string }) => { // Add explicit type
          this.messages.push({ text: response.llmResponse, sender: 'bot' });
        },
        (error: any) => { // Add explicit type
          console.error('Error:', error);
          this.messages.push({ text: 'Error communicating with AI', sender: 'bot' });
        }
      );
    // Clear user input
    this.userInput = '';
  }
}
