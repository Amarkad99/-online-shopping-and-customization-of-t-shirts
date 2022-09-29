package com.Trendy_T.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Trendy_T.Entity.User;
import com.Trendy_T.pojo.Massage;
import com.Trendy_T.pojo.UserInfo;
import com.Trendy_T.repositories.UserRepository;

@RestController
@RequestMapping("/Login")
@CrossOrigin
public class LoginController {
	
	@Autowired
	UserRepository urepo;
	
@GetMapping ("login/{email}/{password}")
	public User checklogin(@PathVariable String email,@PathVariable String password)
	{
		
		System.out.println("Here We are");
		User a=(User)urepo.findByEmail(email);
		if( a!=null && a.getEmail().equals(email)){
			if(a.getPassword().equals(password)) {
			return a; 		
			}
			else
				return null;
		}
		else
		return null;
	}

}