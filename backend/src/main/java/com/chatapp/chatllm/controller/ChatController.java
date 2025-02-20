package com.chatapp.chatllm.controller;

import com.chatapp.chatllm.model.ChatRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;

import java.util.Optional;

@RestController
@RequestMapping("/chat")
@CrossOrigin(origins = "http://localhost:4200")
public class ChatController {

    @PostMapping("/send")
    public ResponseEntity<String> sendMessage(@RequestBody ChatRequest request) {
        System.out.println("Response from frontend :" + request.getText());
        return ResponseEntity.of(Optional.ofNullable(request.getText()));
    }
}
