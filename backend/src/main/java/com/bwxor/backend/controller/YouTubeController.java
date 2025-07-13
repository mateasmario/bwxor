package com.bwxor.backend.controller;

import com.bwxor.backend.exception.ServiceException;
import com.bwxor.backend.service.YouTubeService;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;

@Tag(name = "YouTube")
@RestController
@RequestMapping("/api/youtube")
public class YouTubeController {
    @Autowired
    private YouTubeService youTubeService;

    @GetMapping("download")
    public void getVideo(@RequestParam("url") String url, HttpServletResponse httpServletResponse) {
        File file = null;
        try {
            file = youTubeService.downloadVideo(url);

            String contentType = Files.probeContentType(file.toPath());
            if (contentType == null) {
                // Use the default media type
                contentType = MediaType.APPLICATION_OCTET_STREAM_VALUE;
            }

            httpServletResponse.setContentType(contentType);
            // File Size
            httpServletResponse.setContentLengthLong(Files.size(file.toPath()));
            httpServletResponse.setHeader(HttpHeaders.CONTENT_DISPOSITION, ContentDisposition.attachment()
                    .filename(file.toPath().getFileName().toString(), StandardCharsets.UTF_8)
                    .build()
                    .toString());

            Files.copy(file.toPath(), httpServletResponse.getOutputStream());

            Files.delete(file.toPath());

        } catch (ServiceException | IOException e) {
        }
    }
}
