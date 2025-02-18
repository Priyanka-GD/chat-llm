import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';

export const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' }, // Redirect '/' to '/chat'
  { path: 'chat', component: ChatComponent }, // Route for Chat Page
  { path: '**', redirectTo: 'chat' } // Redirect unknown paths to Chat
];
