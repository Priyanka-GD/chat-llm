import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // ✅ Import withFetch
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './services/chat/chat.service';

// ✅ Define Routes Here
const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: 'chat' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(),
    provideRouter(routes, withComponentInputBinding()), // ✅ Register Routes
    provideHttpClient(withFetch()), // ✅ Enable fetch for HttpClient
    ChatService // ✅ Provide ChatService Globally
  ]
};
