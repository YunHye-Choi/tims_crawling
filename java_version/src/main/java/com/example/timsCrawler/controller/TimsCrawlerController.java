package com.example.timsCrawler.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
public class TimsCrawlerController {
    @GetMapping("/tims-crawler/main")
    public String mainPage(){
        return "crawler_user_info";
    }

    @GetMapping("/tims-crawler/dashboard")
    public String dashboardPage(){
        return "crawler_dashboard";
    }

}