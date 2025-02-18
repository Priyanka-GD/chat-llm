package src.main.java.com.chatapp.chatllm.controller;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import src.main.java.com.chatapp.chatllm.model.ChatRequest;
import src.main.java.com.chatapp.chatllm.model.ChatResponse;
import src.main.java.com.chatapp.chatllm.service.ChatService;

@RestController
@RequestMapping("/api/chat")
public class ChatController {
    private final ChatService chatService;
    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    private final String API_GATEWAY_URL = " https://0py13rhtf8.execute-api.us-east-1.amazonaws.com/prod/"; // Replace with actual API Gateway URL

    @PostMapping("/send")
    public ResponseEntity<String> sendMessage(@RequestBody String message) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> request = new HttpEntity<>("{\"text\": \"" + message + "\"}", headers);

        ResponseEntity<String> response = restTemplate.exchange(API_GATEWAY_URL, HttpMethod.POST, request, String.class);

        return ResponseEntity.ok(response.getBody());
    }
}
