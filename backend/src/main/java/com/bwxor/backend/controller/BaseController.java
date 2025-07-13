package com.bwxor.backend.controller;

import io.swagger.v3.oas.annotations.Hidden;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@Hidden
@RestController
@RequestMapping("/api")
public class BaseController {
    @GetMapping("")
    public RedirectView getIndex() {
        return new RedirectView("api/swagger-ui.html");
    }

    @GetMapping("/")
    public RedirectView getIndexTrailing() {
        return new RedirectView("swagger-ui.html");
    }
}
