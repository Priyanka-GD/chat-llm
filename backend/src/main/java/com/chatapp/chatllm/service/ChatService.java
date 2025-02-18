package src.main.java.com.chatapp.chatllm.service;
import org.springframework.stereotype.Service;
import src.main.java.com.chatapp.chatllm.model.ChatRequest;
import src.main.java.com.chatapp.chatllm.model.ChatResponse;

@Service
public class ChatService {
    public ChatResponse getChatResponse(ChatRequest request) {
        return new ChatResponse("AI Response: " + request.getMessage());
    }
}
