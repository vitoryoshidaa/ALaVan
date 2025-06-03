package com.example.A._La_vanTeste.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/sobre")
public class SobreNosController {
    @GetMapping
    public String sobreNos() {
        return "SobreNos";
    }
}
