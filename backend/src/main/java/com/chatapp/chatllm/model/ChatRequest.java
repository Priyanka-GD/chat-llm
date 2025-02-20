package com.chatapp.chatllm.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChatRequest {
    @JsonProperty("text")  // ✅ Ensures JSON key mapping
    private String text;

    public ChatRequest() {}

    public ChatRequest(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return "ChatRequest{text='" + text + "'}";
    }
}
