package com.bwxor.backend.config;

import com.github.kiulian.downloader.Config;
import com.github.kiulian.downloader.YoutubeDownloader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class YouTubeConfiguration {
    @Bean
    public YoutubeDownloader youtubeDownloader() {
        Config config = new Config.Builder()
                .maxRetries(2)
                .header("Accept-language", "en-US,en;")
                .build();
        YoutubeDownloader downloader = new YoutubeDownloader(config);
        return downloader;
    }
}
