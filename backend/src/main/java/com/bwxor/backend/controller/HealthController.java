package com.bwxor.backend.controller;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name="Health Checking")
@RestController
@RequestMapping("/api/health")
public class HealthController {
    @GetMapping("")
    public ResponseEntity<String> getHealth() {
        return ResponseEntity.ok("Backend server is healthy.");
    }

    @Hidden
    @GetMapping("/")
    public ResponseEntity<String> getHealthTrailing() {
        return ResponseEntity.ok("Backend server is healthy.");
    }
}
