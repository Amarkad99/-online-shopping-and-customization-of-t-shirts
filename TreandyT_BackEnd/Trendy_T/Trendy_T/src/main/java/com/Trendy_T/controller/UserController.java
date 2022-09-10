package com.Trendy_T.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Trendy_T.Entity.User;
import com.Trendy_T.dao.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserRepository urepo;
	@GetMapping("/findall")
	public List<User> users()
	{
		return urepo.findAll();
	}
	
	

}
