package com.bwxor.backend.controller;

import com.bwxor.backend.entity.Markdown;
import com.bwxor.backend.service.MarkdownService;
import com.bwxor.backend.to.MarkdownSummary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*")
public class MarkdownController {
    @Autowired
    private MarkdownService markdownService;

    @GetMapping("/health")
    public ResponseEntity<String> getHealth() {
        return ResponseEntity.ok("Backend server is healthy.");
    }

    @GetMapping("/pages/index")
    public ResponseEntity<Markdown> getIndex() {
        Markdown indexPage = markdownService.findIndex();
        return ResponseEntity.ok(indexPage);
    }

    @GetMapping("/pages/{category}")
    public ResponseEntity<List<MarkdownSummary>> getByCategory(@PathVariable String category) {
        List<MarkdownSummary> indexPage = markdownService.findByCategory(category);
        return ResponseEntity.ok(indexPage);
    }

    @GetMapping("/pages/{category}/{slug}")
    public ResponseEntity<List<Markdown>> getByCategoryAndSlug(@PathVariable String category, @PathVariable String slug) {
        List<Markdown> indexPage = markdownService.findByCategoryAndSlug(category, slug);
        return ResponseEntity.ok(indexPage);
    }
}
