package com.bwxor.backend.repository;

import com.bwxor.backend.entity.Markdown;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MarkdownRepository extends MongoRepository<Markdown, String> {
    Markdown findByTitle(String title);
    List<Markdown> findByCategory(String category);
    List<Markdown> findByCategoryAndSlug(String category, String slug);
}
