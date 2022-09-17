package com.Trendy_T.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Owner")
@CrossOrigin
public class OwnerController {

	@GetMapping("/Report")
	
	public void getReport() {
		
		
	}
	
}
