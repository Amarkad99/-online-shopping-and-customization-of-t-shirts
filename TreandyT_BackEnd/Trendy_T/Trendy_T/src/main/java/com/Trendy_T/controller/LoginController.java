package com.Trendy_T.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	@RequestMapping(method = RequestMethod.POST ,value = "/login")
	public Massage login(@RequestBody UserInfo us)
	{
		System.out.println(us.getEmail_id());
		System.out.println("Here We are");
		User a=(User)urepo.findByEmail(us.getEmail_id());
		if( a!=null && a.getPassword().equals(us.getPassword())){
			return new Massage ("OK"); 			
		}
		else
		return new Massage ("not ok");
	}

}
