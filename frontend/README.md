# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Chat Application - Frontend (Angular)


📝 Overview

This is the frontend UI for a real-time chat application powered by Amazon Bedrock AI. The application is built using Angular and interacts with an AWS Lambda function via API Gateway to generate AI-powered responses.

🎯 Purpose

The primary goal of this frontend application is to:

✅ Provide a user-friendly chat interface for sending and receiving messages.

✅ Send user messages to AWS Lambda for processing.

✅ Display AI-generated responses in a structured format.

✅ Maintain a chat history for a seamless user experience.

🛠️ Tech Stack

Frontend Framework → Angular

CSS Framework → TailwindCSS / Custom CSS

HTTP Requests → Angular HttpClient

Backend Integration → AWS API Gateway + Lambda

State Management → Component-level state

📌 Features

✅ Interactive Chat UI → Messages from the user and AI are displayed distinctly.

✅ Auto-scroll to latest messages → Ensures smooth conversation flow.

✅ AI-powered responses → Real-time interaction with Amazon Bedrock.

✅ Keyboard Support → Press Enter to send messages.

✅ Error Handling → Displays error messages if the AI response fails.

🖥️ UI Components Overview

1️⃣ chat.component.ts (Main Chat Logic)

Handles user input and AI responses.
Sends API requests via ChatService.
Manages chat history and auto-scroll.

2️⃣ chat.component.html (Chat UI)

Displays user and AI messages.
Includes an input field and send button.

3️⃣ chat.service.ts (API Communication)

Sends chat messages to AWS Lambda.
Handles API responses and errors.


Future Enhancements

🔹 Support Multiple AI Models (Claude, Mistral, Titan, etc.)

🔹 Improve UI/UX with animations & themes

🔹 Add Speech-to-Text input for voice interaction


🛡️ Security Considerations

🔒 Use Environment Variables → Hide API Gateway URL from source code.

🔒 Enable CORS Restrictions → Restrict API access to trusted domains.

🔒 Implement Authentication → Secure API calls using JWT tokens.

