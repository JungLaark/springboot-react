package com.portfolio.laark.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	
	@GetMapping("/test")
	public List<String> hello(){
		return Arrays.asList("Hello", "Hello2");
	}

}
